import { createError, defineEventHandler, readBody } from 'h3'
import { Configuration, OpenAIApi } from "openai";
import { defaultOptions } from '../../constants/request-options';

import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // get the data that comes from the request
  const prompt = await readBody(event)

  // throw an error if the apiKey is not set
  if (!useRuntimeConfig().chatgpt.apiKey) {
    throw createError({
      statusCode: 403,
      message: 'Missing OpenAI API Key',
    })
  }

  // set-up configuration object and apiKEY
  const configuration = new Configuration({
    apiKey: useRuntimeConfig().chatgpt.apiKey
  });

  // init new instance of openai and pass configuration into it
  const openai = new OpenAIApi(configuration);

  // merge the prompt object and default options
  const requestOptions = { prompt, ...defaultOptions }

  try {
    // send the request and prepare the response
    const response = await openai.createCompletion(requestOptions);
    return response.data.choices[0].text?.slice(2)
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to forward request to OpenAI API',
    })
  }
})
