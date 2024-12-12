// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 3,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxtjs/sanity',
    'nuxt-gtag',
  ],


  gtag: {
    id: 'G-CG6E55EP3Y'
  },




  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  
  // runtimeConfig: {
  //   public: {
  //    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  //   },
  // },

  
})