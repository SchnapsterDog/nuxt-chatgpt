import { addImportsDir, addServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { fileURLToPath } from 'url'
import { configKey, moduleName, nuxtVersion } from './config'

// Module options TypeScript inteface definition
export interface ModuleOptions {
  /**
   * Set chatGPT apiKey
   * @default undefined
   * @description Set your chatGPT apiKey
  */
  apiKey?: string

  /**
   * Set chatGPT baseUrl
   * @default 'https://api.openai.com/v1'
   * @description Set your chatGPT baseUrl
  */
  baseURL?: string

  /**
   * Setting to `false` disables the module.
   * @default true
   * @description Use this setting to disable the module.
  */
  isEnabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: moduleName,
    configKey,
    compatibility: {
      nuxt: nuxtVersion
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    isEnabled: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    // Transpile runtime
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    if (!options.apiKey) {
      // eslint-disable-next-line no-console
      return console.warn(`[${moduleName}]: No '${configKey}.apiKey' option provided!`)
    }

    if (!options.isEnabled) {
      // eslint-disable-next-line no-console
      return console.warn(`[${moduleName}] module is disabled and will not be loaded.`)
    }

    // Add apiKey and baseURL in runtimeConfig - user can override at runtime with NUXT_CHATGPT_API_KEY
    nuxt.options.runtimeConfig[configKey] = defu(nuxt.options.runtimeConfig[configKey], {
      apiKey: options.apiKey,
      baseURL: options.baseURL ?? 'https://api.openai.com/v1',
    })

    // Add composables
    addImportsDir(resolve('./runtime/composables'))

    // Add server handler
    addServerHandler(
      {
        route: '/api/chat',
        method: 'post',
        handler: resolve(runtimeDir, 'server/api/chat'),
      }
    )

    addServerHandler(
      {
        route: '/api/chat-completion',
        method: 'post',
        handler: resolve(runtimeDir, 'server/api/chat-completion'),
      }
    )

    addServerHandler(
      {
        route: '/api/image-generate',
        method: 'post',
        handler: resolve(runtimeDir, 'server/api/image-generate'),
      }
    )

    nuxt.options.build.transpile.push(runtimeDir)
  }
})
