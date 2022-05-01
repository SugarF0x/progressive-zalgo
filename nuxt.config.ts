import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'HE COMES',
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }]
    }
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss']
})
