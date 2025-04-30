import OpenAI from 'openai'
import { createError, defineEventHandler, readBody } from "h3"
import { defaultOptions } from "../../constants/options"
import { MODEL_GPT_4_MINI } from '../../constants/models'
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
    messages: [{ role: 'user', content: message }],
    model: !model ? modelMap[MODEL_GPT_4_MINI] : modelMap[model],
    ...(options || defaultOptions)
  }

  /**
   * @return response
  */
  try {
    const chatCompletion = await openai.chat.completions.create(requestOptions)
    return (chatCompletion.choices[0] as { message: { content: string } }).message?.content
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error
    })
  }
})