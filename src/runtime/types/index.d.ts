export interface IChatgptClient {
  send ( IMessage ) : Promise
}

export interface IMessage {
  message: string
}

