import { createError } from "h3";
import type { IChatgptClient, IMessage, IModel, IOptions } from "../types";

type StreamHandlers = {
  onToken?: (token: string) => void;
  onDone?: () => void;
  onError?: (err: any) => void;
};

export const useChatgpt = (): IChatgptClient & {
  chatCompletionStream: (
    messages?: [],
    model?: IModel,
    options?: IOptions,
    handlers?: StreamHandlers,
    abortSignal?: AbortSignal,
  ) => Promise<void>;
} => {
  const chat = async (
    message: IMessage,
    model?: IModel,
    options?: IOptions,
  ) => {
    try {
      return await $fetch("/api/chat", {
        method: "POST",
        body: { message, model, options },
      });
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to forward request to server",
      });
    }
  };

  const chatCompletion = async (
    messages?: [],
    model?: IModel,
    options?: IOptions,
  ) => {
    try {
      return await $fetch("/api/chat-completion", {
        method: "POST",
        body: { messages, model, options },
      });
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to forward request to server",
      });
    }
  };

  const generateImage = async (
    message: IMessage,
    model?: IModel,
    options?: IOptions,
  ) => {
    try {
      return await $fetch("/api/image-generate", {
        method: "POST",
        body: { message, model, options },
      });
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to forward request to server",
      });
    }
  };

  const chatCompletionStream = async (
    messages?: [],
    model?: IModel,
    options?: IOptions,
    handlers: StreamHandlers = {},
    abortSignal?: AbortSignal,
  ) => {
    try {
      const res = await fetch("/api/chat-completion-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, model, options }),
        signal: abortSignal,
      });

      if (!res.ok || !res.body) {
        const text = await res.text().catch(() => "");
        throw new Error(
          `Stream failed (${res.status}): ${text || res.statusText}`,
        );
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      const emit = (eventName: string, data: string) => {
        if (eventName === "token") handlers.onToken?.(data);
        else if (eventName === "done") handlers.onDone?.();
        else if (eventName === "error") {
          try {
            handlers.onError?.(JSON.parse(data));
          } catch {
            handlers.onError?.(data);
          }
        }
      };

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // SSE frames end with \n\n
        let idx: number;
        while ((idx = buffer.indexOf("\n\n")) !== -1) {
          const frame = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 2);

          let eventName = "message";
          const dataLines: string[] = [];

          for (const line of frame.split("\n")) {
            if (line.startsWith("event:")) eventName = line.slice(6).trim();
            if (line.startsWith("data:"))
              dataLines.push(line.slice(5).trimStart());
          }

          const data = dataLines.join("\n");

          if (eventName === "done") {
            emit("done", data);
            return;
          }

          if (eventName === "token" || eventName === "error") {
            emit(eventName, data);
          }
        }
      }
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: "Failed to forward request to server",
      });
    }
  };

  return { chat, chatCompletion, generateImage, chatCompletionStream };
};
