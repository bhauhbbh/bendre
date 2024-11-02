// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap'
        }
      ]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
   // Add error handling configuration
   nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: []
    }
  },

  // Add route rules
  routeRules: {
    // Handle non-existing routes
    '/**': { prerender: false }
  },
  experimental: {
    payloadExtraction: false
  },
  
})