export default defineNuxtConfig({
  modules: ['../src/module'],
  chatgpt: {
    apiKey: 'xxxx',
    baseURL: 'https://api.openai.com/v1',
    isEnabled: true
  }
})
