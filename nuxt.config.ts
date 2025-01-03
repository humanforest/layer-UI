// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: './components', prefix: '', pathPrefix: false }],
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'green', 'blue', 'red', 'yellow', 'purple', 'pink', 'indigo', 'teal', 'cyan', 'gray', 'black', 'white'],
    }
  }
})
