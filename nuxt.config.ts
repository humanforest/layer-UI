// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: './components', prefix: '', pathPrefix: false }],
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['./assets/css/main.css'],
})
