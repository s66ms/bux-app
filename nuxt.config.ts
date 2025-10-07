// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint'],
  devtools: {
    enabled: true
  },

  css: ['~/assets/scss/_general.scss'],
  compatibilityDate: '2025-07-15',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
          additionalData: `
            @use "~/assets/scss/_mixins.scss" as *;
            @use "~/assets/scss/_variables.scss" as *;
          `
        }
      }
    }
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
        commaDangle: 'never',
        braceStyle: '1tbs',
        quoteProps: 'as-needed'
      }
    }
  }
})
