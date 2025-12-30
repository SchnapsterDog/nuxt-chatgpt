import OpenAI from 'openai'
import { createError, defineEventHandler, readBody } from "h3"
import { defaultDaleOptions } from "../../constants/options"
import { MODEL_GPT_IMAGE_1_MINI } from "../../constants/models";
import { modelMap } from "../../utils/model-map"
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // destructing the data that comes from the request
  const { message, model, options } = await readBody(event)

  // throw an error if the apiKey is not set
  if (!useRuntimeConfig().chatgpt.apiKey) {
    throw createError({
      statusCode: 403,
      message: 'Missing OpenAI API Key',
    })
  }

  // set-up configuration object and apiKEY
  const openai = new OpenAI({
    apiKey: useRuntimeConfig().chatgpt.apiKey
  });

  /**
   * Create request options object
   * @description if the model is not defined by the user it will be used the default one - gpt-3.5-turbo
  */
  const requestOptions = {
    prompt: message,
    model: !model ? modelMap[MODEL_GPT_IMAGE_1_MINI] : modelMap[model],
    ...(options || defaultDaleOptions),
  };

  /**
   * @return response
  */
  try {
    const response = await openai.images.generate(requestOptions)
    return response.data
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error
    })
  }
})