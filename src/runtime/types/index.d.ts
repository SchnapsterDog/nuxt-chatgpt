export interface IChatgptClient {
  chat(IMessage): Promise,
  chatCompletion(IMessage): Promise
}

export interface ISystem {
  system: string
}

export interface IMessage {
  message: string
}

export interface IModel {
  model: string
}

export interface IOptions {
  temperature: number,
  max_tokens: number,
  top_p: number,
  frequency_penalty: number,
  presence_penalty: number,
}