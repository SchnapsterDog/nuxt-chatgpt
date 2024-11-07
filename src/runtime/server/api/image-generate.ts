import { useRuntimeConfig } from '#imports'
import { createError, defineEventHandler, readBody } from "h3"
import OpenAI from 'openai'
import { MODEL_GPT_DALL_E_2 } from '../../constants/models'
import { defaultDaleOptions } from "../../constants/options"
import { modelMap } from "../../utils/model-map"

export default defineEventHandler(async (event) => {
  // destructing the data that comes from the request
  const { message, model, options } = await readBody(event)

  const config = useRuntimeConfig()

  // throw an error if the apiKey is not set
  if (!config.chatgpt.apiKey) {
    throw createError({
      statusCode: 403,
      message: 'Missing OpenAI API Key',
    })
  }

  // set-up configuration object and apiKEY - baseURL is optional
  const openai = new OpenAI({
    apiKey: config.chatgpt.apiKey,
    baseURL: config.chatgpt.baseURL
  });

  /**
   * Create request options object
   * @description if the model is not defined by the user it will be used the default one - gpt-3.5-turbo
  */
  const requestOptions = {
    prompt: message,
    model: !model ? modelMap[MODEL_GPT_DALL_E_2] : modelMap[model],
    ...(options || defaultDaleOptions)
  }

  /**
   * @return response
  */
  try {
    const response = await openai.images.generate(requestOptions)
    return response.data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to forward request to OpenAI API',
    })
  }
})
