import type { IHeaders, IMessage } from "../types"

export const getBody = (message: IMessage): string => {
  return JSON.stringify({prompt: message})
}

export const getHeaders = (): IHeaders => {
  return {
    'Content-Type': 'application/json'
  }
}