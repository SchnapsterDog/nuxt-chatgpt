import { createError } from 'h3'
import { getBody, getHeaders } from "../utils"
import type { IChatgptClient, IMessage } from "../types"

export const useChatgpt = (): IChatgptClient => {

  const send = async (message: IMessage) => {

    try {
      return await $fetch('/api/chatgpt', {
        method: 'POST',
        headers: getHeaders(),
        body: getBody(message)
      })
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: 'Failed to forward request to server',
      })
    }
  }

  return { send }
}