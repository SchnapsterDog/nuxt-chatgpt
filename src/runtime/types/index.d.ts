export interface IHeaders {
  [key: string]: string;
}

export interface IChatgptClient {
  send ( IMessage ) : Promise
}

export interface IMessage {
  message: string
}

