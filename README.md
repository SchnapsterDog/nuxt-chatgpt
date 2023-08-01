<!-- PROJECT LOGO -->
<br />
<div>
  <h1>Nuxt Chatgpt</h3>
  <img src="images/chatgpt-logo.png" alt="Logo">

  > [ChatGPT](https://openai.com/) integration for [Nuxt 3](https://nuxt.com).

  [![npm version][npm-version-src]][npm-version-href]
  [![npm downloads][npm-downloads-src]][npm-downloads-href]
  [![License][license-src]][license-href]
</div>
<br />

## About the module

This user-friendly module boasts of an easy integration process that enables seamless implementation into any [Nuxt 3](https://nuxt.com) project. With type-safe integration, you can integrate [ChatGPT](https://openai.com/) into your [Nuxt 3](https://nuxt.com) project without breaking a <b>sweat</b>. Enjoy easy access to the `chat`, and `chatCompletion` methods through the `useChatgpt()` composable. Additionally, the module guarantees <b><i>security</i></b> as requests are routed through a [Nitro Server](https://nuxt.com/docs/guide/concepts/server-engine), thus preventing the exposure of your <b>API Key</b>.

## Features

- 💪 &nbsp; Easy implementation into any [Nuxt 3](https://nuxt.com) project.
- 👉 &nbsp; Type-safe integration of Chatgpt into your [Nuxt 3](https://nuxt.com) project.
- 🕹️ &nbsp; Provides a `useChatgpt()` composable that grants easy access to the `chat`, and `chatCompletion` methods.
- 🔥 &nbsp; Ensures security by routing requests through a [Nitro Server](https://nuxt.com/docs/guide/concepts/server-engine), preventing the <b>API Key</b> from being exposed.
- 🧱 &nbsp; It is lightweight and performs well.

## Getting Started

1. Add nuxt-chatgpt dependency to your project
* npm
  ```sh
  npm install --save-dev nuxt-chatgpt
  ```
* pnpm
  ```sh
  pnpm add -D nuxt-chatgpt
  ```
* yarn
  ```sh
  yarn add --dev nuxt-chatgpt
  ```
2. Add nuxt-chatgpt to the modules section of nuxt.config.ts

```js
export default defineNuxtConfig({
  modules: ["nuxt-chatgpt"],

  // entirely optional
  chatgpt: {
    apiKey: 'Your apiKey here goes here',
    basePath: 'Your bashPath here goes here', // optional
  },
})
```
That's it! You can now use Nuxt Chatgpt in your Nuxt app 🔥

## Usage & Examples

To access the `chat`, and `chatCompletion` methods in the nuxt-chatgpt module, you can use the `useChatgpt()` composable, which provides easy access to them. The `chat`, and `chatCompletion` methods requires three parameters:


| Name | Type | Default | Description |
|--|--|--|--|
|**message**|`String`||A string representing the text message that you want to send to the GPT model for processing.
|**model**|`String`|`text-davinci-003` for `chat()` and `gpt-3.5-turbo` for `chatCompletion()`|Represent certain model for different types of natural language processing tasks.
|**options**|`Object`|`{ temperature: 0.5, max_tokens: 2048, top_p: 1 frequency_penalty: 0, presence_penalty: 0 }`|An optional object that specifies any additional options you want to pass to the API request, such as the number of responses to generate, and the maximum length of each response.

Available models for `chat`

- text-davinci-003
- text-davinci-002

Available models for `chatCompletion`

- gpt-3.5-turbo
- gpt-3.5-turbo-0301

You need to join waitlist to use gpt-4 models within `chatCompletion` method

- gpt-4
- gpt-4-0314
- gpt-4-32k
- gpt-4-32k-0314

### Simple `chat` usage 
In the following example, the model is unspecified, and the text-davinci-003 model will be used by default.

```js
const { chat } = useChatgpt()

const data = ref('')
const message = ref('')

async function sendMessage() {
  const response = await chat(message.value)
  data.value = response
}

```

```html
<template>
  <div>
    <input v-model="message">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>{{ data }}</div>
  </div>
</template>
```

### Usage of `chat` with different model

```js
const { chat } = useChatgpt()

const data = ref('')
const message = ref('')

async function sendMessage() {
  const response = await chat(message.value, 'text-davinci-002')
  data.value = response
}

```

```html
<template>
  <div>
    <input v-model="message">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>{{ data }}</div>
  </div>
</template>
```

### Simple `chatCompletion` usage 
In the following example, the model is unspecified, and the gpt-3.5-turbo model will be used by default.

```js
const { chatCompletion } = useChatgpt()

const data = ref('')
const message = ref('')

async function sendMessage() {
  const response = await chatCompletion(message.value)
  data.value = response
}

```

```html
<template>
  <div>
    <input v-model="message">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>{{ data }}</div>
  </div>
</template>
```

### Usage of `chatCompletion` with different model

```js
const { chatCompletion } = useChatgpt()

const data = ref('')
const message = ref('')

async function sendMessage() {
  const response = await chatCompletion(message.value, 'gpt-3.5-turbo-0301')
  data.value = response
}

```

```html
<template>
  <div>
    <input v-model="message">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>{{ data }}</div>
  </div>
</template>
```

## chat vs chatCompletion

The `chat` method allows the user to send a prompt to the OpenAI API and receive a response. You can use this endpoint to build conversational interfaces that can interact with users in a natural way. For example, you could use the chat method to build a chatbot that can answer customer service questions or provide information about a product or service.

The `chatCompletion` method is similar to the `chat` method, but it provides additional functionality for generating longer, more complex responses. Specifically, the chatCompletion method allows you to provide a conversation history as input, which the API can use to generate a response that is consistent with the context of the conversation. This makes it possible to build chatbots that can engage in longer, more natural conversations with users.


## Module Options

| Name | Type | Default | Description |
|--|--|--|--|
|**apiKey**|`String`|`xxxxxx`|Your apiKey here goes here
|**basePath**|`String`|`https://api.openai.com/v1`|Your basePath here goes here
|**isEnabled**|`Boolean`|`true`| Enable or disable the module. `True` by default.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Oliver Trajceski - [LinkedIn](https://mk.linkedin.com/in/oliver-trajceski-8a28b070) - oliver@akrinum.com

Project Link: [https://github.com/schnapsterdog/nuxt-chatgpt](https://github.com/schnapsterdog/nuxt-chatgpt)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/schnapsterdog/nuxt-chatgpt.svg?style=for-the-badge
[contributors-url]: https://github.com/schnapsterdog/nuxt-chatgpt/graphs/contributors
[downloads-shield]: https://img.shields.io/npm/dw/nuxt-chatgpt.svg?style=for-the-badge
[downloads-url]: https://www.npmjs.com/package/nuxt-chatgpt
[stars-shield]: https://img.shields.io/github/stars/nuxt-chatgpt.svg?style=for-the-badge
[stars-url]: https://github.com/schnapsterdog/nuxt-chatgpt/stargazers
[issues-shield]: https://img.shields.io/github/issues/schnapsterdog/nuxt-chatgpt.svg?style=for-the-badge
[issues-url]: https://github.com/schnapsterdog/nuxt-chatgpt/issues
[license-shield]: https://img.shields.io/github/license/schnapsterdog/nuxt-chatgpt.svg?style=for-the-badge
[license-url]: https://github.com/schnapsterdog/nuxt-chatgpt/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://mk.linkedin.com/in/oliver-trajceski-8a28b070
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/

[npm-version-src]: https://img.shields.io/npm/v/nuxt-chatgpt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-chatgpt
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-chatgpt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-chatgpt
[license-src]: https://img.shields.io/npm/l/nuxt-chatgpt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-chatgpt
