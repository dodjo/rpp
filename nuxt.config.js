export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app-rpp-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        as: 'style',
        rel: 'stylesheet preload prefetch',
        href: '/fonts/fonts.css'
      }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reset-css/reset.css',
    // 'element-ui/lib/theme-chalk/index.css',
    '~assets/styles/theme-element/index.css',
    '~assets/styles/global'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL
  },

  auth: {
    local: {
      token: {
        property: 'token',
        global: true,
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'user',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/api/auth/login', method: 'post' },
        logout: { url: '/api/auth/logout', method: 'post' },
        user: { url: '/api/auth/user', method: 'get' }
      }
    }
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },


  router: {
    linkActiveClass: 'active'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
