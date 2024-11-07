
# Changelog

## v0.2.6

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.5...v0.2.6)

### 🚀 Enhancements

- Add baseURL option and update npm deps. ([b559888](https://github.com/schnapsterdog/nuxt-chatgpt/commit/b559888))

### ❤️ Contributors

- Bit0r ([@Bit0r](http://github.com/Bit0r))

## v0.2.5

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.4...v0.2.5)

### 🚀 Enhancements

- Created generateImage feature through open ai dale models ([da104a2](https://github.com/schnapsterdog/nuxt-chatgpt/commit/da104a2))
- Updated default map inside model-map ([6792040](https://github.com/schnapsterdog/nuxt-chatgpt/commit/6792040))
- Updated keyworks in package.json file ([39d2806](https://github.com/schnapsterdog/nuxt-chatgpt/commit/39d2806))

### 📖 Documentation

- Updated Readme.md file ([cb94a9a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/cb94a9a))

### ❤️ Contributors

- Schnapsterdog <olivertrajceski@yahoo.com>

## v0.2.4

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.3...v0.2.4)

### 🚀 Enhancements

- Updated gpt-4 models, changed default models ([2c5039a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/2c5039a))

### 📖 Documentation

- Updated Readme.md file ([81d5818](https://github.com/schnapsterdog/nuxt-chatgpt/commit/81d5818))
- Updated Readme.md file with showcase and demo ([4e19e42](https://github.com/schnapsterdog/nuxt-chatgpt/commit/4e19e42))

### ❤️ Contributors

- Schnapsterdog <olivertrajceski@yahoo.com>

## v0.2.3

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.2...v0.2.3)

## v0.2.2

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.1...v0.2.2)

### 🚀 Enhancements

- Core changes of chat vs chatCompletion methods, chatCompletion now serve as Socratic Tutors and can be sent set of messages, added new models, updated model-map, updated Readme.md file ([d3c6784](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d3c6784))

### 🩹 Fixes

- Removed key from playground ([e736706](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e736706))

### 📖 Documentation

- Updated Changelog.md file ([8bb28dd](https://github.com/schnapsterdog/nuxt-chatgpt/commit/8bb28dd))

### 🏡 Chore

- Test bundler module resolution ([4bce76a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/4bce76a))

### ❤️ Contributors

- Schnapsterdog <olivertrajceski@yahoo.com>
- Daniel Roe <daniel@roe.dev>
- SchnapsterDog <olivertrajceski@yahoo.com>

## v0.2.1

### 📖 Documentation

  - Udpated CHANGELOG.md file (f40671c)

### 📦 Build

  - Updated openai library to v@4.0.0, adjusted API calls (f36392f)

### 🏡 Chore

  - **release:** V0.2.1 (e3a30fc)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>

## v0.1.10


### 🚀 Enhancements

  - Created models constants, created new routes for chat/chat-completions, added model-map, adjusted composable useChatgpt (085d66d)

### 🔥 Performance

  - Created constants folder, added defaultOptions for api request (def9dbc)

### 📖 Documentation

  - Added comments to the api/chat, api/chat-completion routes (dcc0f47)
  - Updated Readme.md file (740436b)

### 🏡 Chore

  - **release:** V0.1.9 (e3a30fc)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>

## v0.1.9


### 🩹 Fixes

  - Removed body destructuring from openai.ts (e5af2f7)

### 🏡 Chore

  - Release new version (59e5352)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>
- AbdelH2O

## v0.1.8


### 🩹 Fixes

  - Removed unnecessary interface (102fcb2)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>

## v0.1.7


### 🚀 Enhancements

  - Added Changelog.md file (cd473d5)
  - Added defu packages (94f3852)

### 🩹 Fixes

  - Do not expose api key to client (0f9cb2c)
  - Use native `$fetch` json behaviour (d68abfb)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>
- Danielroe <daniel@roe.dev>

## v0.1.6


### 🚀 Enhancements

  - Downgraded nuxt/kit version to be compatible with lower version of nuxt such as 3.0.0 (d3fea8a)

### 🩹 Fixes

  - Adjusted playground options (1fe834b)
  - Importing useRuntimeConfig inside server/api/chatgpt.ts file (ef4a929)
  - DefineEventHandler inside server/api file (71653d6)
  - Importing readBody (0e8714a)

### 🎨 Styles

  - Refactor server api route, adjusted Readme.md file (71da883)

### ❤️  Contributors

- SchnapsterDog <olivertrajceski@yahoo.com>
