import { createError, defineEventHandler, readBody } from "h3"
import { Configuration, OpenAIApi } from "openai"
import { defaultOptions } from "../../constants/options"
import { MODEL_GPT_TURBO_3_5 } from '../../constants/models'
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
  const configuration = new Configuration({
    apiKey: useRuntimeConfig().chatgpt.apiKey,
    basePath: useRuntimeConfig().chatgpt.basePath,
  });

  // init new instance of openai and pass configuration into it
  const openai = new OpenAIApi(configuration);

  /**
   * Create request options object
   * @description if the model is not defined by the user it will be used the default one - gpt-3.5-turbo
  */
  const requestOptions = {
    messages: [{ role: 'user', content: message }],
    model: !model ? modelMap[MODEL_GPT_TURBO_3_5] : modelMap[model],
    ...(options || defaultOptions)
  }

  /**
   * @return response
  */
  try {
    const { data } = await openai.createChatCompletion(requestOptions)
    return (data.choices[0] as { message: { content: string } }).message?.content
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to forward request to OpenAI API',
    })
  }
})
