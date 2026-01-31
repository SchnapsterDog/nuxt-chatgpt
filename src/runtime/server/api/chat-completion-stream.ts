import OpenAI from "openai";
import { createError, defineEventHandler, readBody, setHeader } from "h3";
import { defaultOptions } from "../../constants/options";
import { MODEL_GPT_5_MINI } from "../../constants/models";
import { modelMap } from "../../utils/model-map";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
  const { messages, model, options } = await readBody(event);

  if (!useRuntimeConfig().chatgpt.apiKey) {
    throw createError({
      statusCode: 403,
      message: "Missing OpenAI API Key",
    });
  }

  const openai = new OpenAI({
    apiKey: useRuntimeConfig().chatgpt.apiKey,
  });

  const requestOptions = {
    messages,
    model: !model ? modelMap[MODEL_GPT_5_MINI] : modelMap[model],
    ...(options || defaultOptions),
    stream: true,
  };

  // SSE headers
  setHeader(event, "Content-Type", "text/event-stream; charset=utf-8");
  setHeader(event, "Cache-Control", "no-cache, no-transform");
  setHeader(event, "Connection", "keep-alive");

  // flush headers (if supported by runtime)
  // @ts-ignore
  event.node.res.flushHeaders?.();

  const res = event.node.res;

  // Abort upstream when client disconnects
  const abort = new AbortController();
  event.node.req.on("close", () => abort.abort());

  // helper to write SSE event
  const writeEvent = (eventName: string, data: string) => {
    res.write(`event: ${eventName}\n`);
    // data can contain newlines; SSE allows multiple data: lines
    const lines = String(data).split("\n");
    for (const line of lines) res.write(`data: ${line}\n`);
    res.write("\n");
  };

  try {
    // Start marker (optional)
    writeEvent("meta", JSON.stringify({ ok: true }));

    // OpenAI streaming
    const stream = await openai.chat.completions.create(
      requestOptions as any,
      { signal: abort.signal } as any,
    );

    for await (const chunk of stream as any) {
      const delta = chunk?.choices?.[0]?.delta?.content;
      if (typeof delta === "string" && delta.length) {
        writeEvent("token", delta);
      }
    }

    writeEvent("done", "[DONE]");
    res.end();
  } catch (error: any) {
    // Send SSE error event then end
    writeEvent(
      "error",
      JSON.stringify({
        message: error?.message ?? String(error),
      }),
    );
    res.end();
  }
});
