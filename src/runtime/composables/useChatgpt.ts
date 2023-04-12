import { createError } from 'h3'
import type { IChatgptClient, IMessage, IModel, IOptions } from "../types"

export const useChatgpt = (): IChatgptClient => {

  const chat = async (message: IMessage, model?: IModel, options?: IOptions) => {

    try {
      return await $fetch('/api/chat', {
        method: 'POST',
        body: {
          message,
          model,
          options
        }
      })
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: 'Failed to forward request to server',
      })
    }
  }

  const chatCompletion = async (message: IMessage, model?: IModel, options?: IOptions) => {

    try {
      return await $fetch('/api/chat-completion', {
        method: 'POST',
        body: {
          message,
          model,
          options
        }
      })
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: 'Failed to forward request to server',
      })
    }
  }

  return { chat, chatCompletion }
}