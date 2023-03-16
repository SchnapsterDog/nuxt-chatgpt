import { fileURLToPath } from 'url'
import { defineNuxtModule, addServerHandler, addImportsDir, createResolver } from '@nuxt/kit'
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

    // Add apiKey in runtimeConfig
    nuxt.options.runtimeConfig.public[configKey] = {
      apiKey: options.apiKey,
    }

    // Add composables
    addImportsDir(resolve('./runtime/composables'))

    // Add server handler
    addServerHandler({
      route: '/api/openai',
      method: 'post',
      handler: resolve(runtimeDir, 'server/api/openai'),
    })

    nuxt.options.build.transpile.push(runtimeDir)
  }
})
