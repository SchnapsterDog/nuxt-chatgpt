export default defineNuxtConfig({
  modules: ['../src/module'],
  chatgpt: {
    apiKey: 'xxxx',
    basePath: 'https://api.openai.com/v1',
    isEnabled: true
  }
})
