import { createError, defineEventHandler, readBody } from 'h3'
import { Configuration, OpenAIApi } from "openai";

import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { prompt } = await readBody(event)
  
  const configuration = new Configuration({
    apiKey: useRuntimeConfig().public.chatgpt.apiKey
  });

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });
    return response.data.choices[0].text?.slice(2)
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to forward request to ChatGPT API',
    })
  }
})