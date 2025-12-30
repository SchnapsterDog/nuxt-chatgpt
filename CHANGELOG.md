
# Changelog

## v0.3.0


### 🚀 Enhancements

- Downgraded nuxt/kit version to be compatible with lower version of nuxt such as 3.0.0 ([d3fea8a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d3fea8a))
- Added Changelog.md file ([cd473d5](https://github.com/schnapsterdog/nuxt-chatgpt/commit/cd473d5))
- Added defu packages ([94f3852](https://github.com/schnapsterdog/nuxt-chatgpt/commit/94f3852))
- Created models constants, created new routes for chat/chat-completions, added model-map, adjusted composable useChatgpt ([085d66d](https://github.com/schnapsterdog/nuxt-chatgpt/commit/085d66d))
- Core changes of chat vs chatCompletion methods, chatCompletion now serve as Socratic Tutors and can be sent set of messages, added new models, updated model-map, updated Readme.md file ([d3c6784](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d3c6784))
- Updated gpt-4 models, changed default models ([2c5039a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/2c5039a))
- Created generateImage feature through open ai dale models ([da104a2](https://github.com/schnapsterdog/nuxt-chatgpt/commit/da104a2))
- Updated default map inside model-map ([6792040](https://github.com/schnapsterdog/nuxt-chatgpt/commit/6792040))
- Updated keyworks in package.json file ([39d2806](https://github.com/schnapsterdog/nuxt-chatgpt/commit/39d2806))
- Handle error messages inside chat, chatCompletion and imageGenerate endpoints ([ad7411a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/ad7411a))
- Updated openai library to 4.96.2, removed dall-e-2 model, make dall-e-3 model default for image generator ([d054dfe](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d054dfe))
- Updated models, updated default models, upgraded packages, making compatible with nuxt 4 ([58858fd](https://github.com/schnapsterdog/nuxt-chatgpt/commit/58858fd))

### 🔥 Performance

- Created constants folder, added defaultOptions for api request ([def9dbc](https://github.com/schnapsterdog/nuxt-chatgpt/commit/def9dbc))

### 🩹 Fixes

- Adjusted playground options ([1fe834b](https://github.com/schnapsterdog/nuxt-chatgpt/commit/1fe834b))
- Importing useRuntimeConfig inside server/api/chatgpt.ts file ([ef4a929](https://github.com/schnapsterdog/nuxt-chatgpt/commit/ef4a929))
- DefineEventHandler inside server/api file ([71653d6](https://github.com/schnapsterdog/nuxt-chatgpt/commit/71653d6))
- Importing readBody ([0e8714a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/0e8714a))
- Do not expose api key to client ([0f9cb2c](https://github.com/schnapsterdog/nuxt-chatgpt/commit/0f9cb2c))
- Use native `$fetch` json behaviour ([d68abfb](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d68abfb))
- Removed unnecessary interface ([102fcb2](https://github.com/schnapsterdog/nuxt-chatgpt/commit/102fcb2))
- Removed body destructuring from openai.ts ([e5af2f7](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e5af2f7))
- Merging conflicts ([18529d3](https://github.com/schnapsterdog/nuxt-chatgpt/commit/18529d3))
- Removed key from playground ([e736706](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e736706))

### 📖 Documentation

- Udpated CHANGELOG.md file ([f40671c](https://github.com/schnapsterdog/nuxt-chatgpt/commit/f40671c))
- Added comments to the api/chat, api/chat-completion routes ([dcc0f47](https://github.com/schnapsterdog/nuxt-chatgpt/commit/dcc0f47))
- Updated Readme.md file ([740436b](https://github.com/schnapsterdog/nuxt-chatgpt/commit/740436b))
- Updated Changelog.md file ([8bb28dd](https://github.com/schnapsterdog/nuxt-chatgpt/commit/8bb28dd))
- Updated Readme.md file ([81d5818](https://github.com/schnapsterdog/nuxt-chatgpt/commit/81d5818))
- Updated Readme.md file with showcase and demo ([4e19e42](https://github.com/schnapsterdog/nuxt-chatgpt/commit/4e19e42))
- Updated Readme.md file ([cb94a9a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/cb94a9a))
- Updated Readme.md file ([d3c8cb1](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d3c8cb1))

### 📦 Build

- Updated openai library to v@4.0.0, adjusted API calls ([f36392f](https://github.com/schnapsterdog/nuxt-chatgpt/commit/f36392f))

### 🏡 Chore

- **release:** V0.1.6 ([b749cad](https://github.com/schnapsterdog/nuxt-chatgpt/commit/b749cad))
- **release:** V0.1.7 ([5bfb38d](https://github.com/schnapsterdog/nuxt-chatgpt/commit/5bfb38d))
- **release:** V0.1.8 ([54f8405](https://github.com/schnapsterdog/nuxt-chatgpt/commit/54f8405))
- Release new version ([59e5352](https://github.com/schnapsterdog/nuxt-chatgpt/commit/59e5352))
- **release:** V0.1.9 ([e3a30fc](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e3a30fc))
- **release:** V0.1.10 ([93f7475](https://github.com/schnapsterdog/nuxt-chatgpt/commit/93f7475))
- **release:** V0.2.1 ([4834677](https://github.com/schnapsterdog/nuxt-chatgpt/commit/4834677))
- Test bundler module resolution ([4bce76a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/4bce76a))
- **release:** V0.2.2 ([e6ccfa4](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e6ccfa4))
- **release:** V0.2.3 ([31db94d](https://github.com/schnapsterdog/nuxt-chatgpt/commit/31db94d))
- **release:** V0.2.4 ([6b3b4b8](https://github.com/schnapsterdog/nuxt-chatgpt/commit/6b3b4b8))
- **release:** V0.2.5 ([8338fcd](https://github.com/schnapsterdog/nuxt-chatgpt/commit/8338fcd))
- **release:** V0.2.6 ([e339dcd](https://github.com/schnapsterdog/nuxt-chatgpt/commit/e339dcd))
- **release:** V0.2.7 ([2ccc947](https://github.com/schnapsterdog/nuxt-chatgpt/commit/2ccc947))

### 🎨 Styles

- Refactor server api route, adjusted Readme.md file ([71da883](https://github.com/schnapsterdog/nuxt-chatgpt/commit/71da883))

### ❤️ Contributors

- Schnapsterdog <olivertrajceski@yahoo.com>
- Daniel Roe ([@danielroe](https://github.com/danielroe))
- SchnapsterDog <olivertrajceski@yahoo.com>
- AbdelH2O ([@AbdelH2O](https://github.com/AbdelH2O))
- Danielroe ([@danielroe](https://github.com/danielroe))

## v0.2.7

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.6...v0.2.7)

## v0.2.6

[compare changes](https://github.com/schnapsterdog/nuxt-chatgpt/compare/v0.2.5...v0.2.6)

### 🚀 Enhancements

- Handle error messages inside chat, chatCompletion and imageGenerate endpoints ([ad7411a](https://github.com/schnapsterdog/nuxt-chatgpt/commit/ad7411a))
- Updated openai library to 4.96.2, removed dall-e-2 model, make dall-e-3 model default for image generator ([d054dfe](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d054dfe))

### 📖 Documentation

- Updated Readme.md file ([d3c8cb1](https://github.com/schnapsterdog/nuxt-chatgpt/commit/d3c8cb1))

### ❤️ Contributors

- Schnapsterdog <olivertrajceski@yahoo.com>

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

