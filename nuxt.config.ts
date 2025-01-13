// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  //plugins: ['~/plugins/v.js'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'nuxt-rate-limit',
    'shadcn-nuxt',
    'radix-vue/nuxt',
    "@nuxtjs/i18n",
    '@pinia/nuxt',
  ],




  
  plugins: [
    { src: '~/plugins/vue-stripe.js', ssr: false },
    '~/plugins/vue-the-mask.js',
    '~/plugins/pinia.js'
    ],
  
  experimental: {
    typedPages: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/listings/**': { swr: true },
    '/users/**': { swr: true },
    '/new-password': { prerender: true },

    '/login': { prerender: true, appMiddleware: 'unauthenticated' },
    '/register': { prerender: true, appMiddleware: 'unauthenticated' },
    '/reset-password': { prerender: true, appMiddleware: 'unauthenticated' },

    '/verify-email': { prerender: true, appMiddleware: ['email-verified'] },

    '/favorites': { prerender: true, appMiddleware: 'authenticated' },
    '/properties/**': { prerender: true, appMiddleware: 'authenticated' },
    '/reservations': { prerender: true, appMiddleware: 'authenticated' },
    '/trips': { prerender: true, appMiddleware: 'authenticated' },
    '/create-listing': { prerender: true, appMiddleware: 'authenticated' },
    '/account-settings': { prerender: true, appMiddleware: 'authenticated' },
    '/account-settings/info': { prerender: true, appMiddleware: 'authenticated' },
    '/account-settings/profile': { prerender: true, appMiddleware: 'authenticated' },
  },

  nuxtRateLimit: {
    routes: {
      '/api/v1/auth/**': { maxRequests: 10, intervalSeconds: 300 },
      '/api/v1/favorites/**': {
        maxRequests: 20,
        intervalSeconds: 60,
      },
      '/api/v1/email/request-verification': {
        maxRequests: 2,
        intervalSeconds: 60 * 60 * 24,
      },
      '/api/v1/email/reset-password': {
        maxRequests: 2,
        intervalSeconds: 60 * 60 * 24,
      },
    },
  },

  build: {
    transpile: ['vue-toastification','gsap'],
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/webp', href: '/favicon32.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway' },
        { rel: 'stylesheet', href: 'https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },


      ],
      script: [

        { src: 'https://upload-widget.cloudinary.com/global/all.js' },
        { src: 'https://js.stripe.com/v3' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js' },
        { src: 'https://js.stripe.com/v3' },
        
//      { src: 'https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.js' }
      ],
    },
  },

  runtimeConfig: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    STRIPE_PK: process.env.STRIPE_PK,

    public: {
      imageUrl: process.env.CLOUDINARY_PATH,
      cloudinaryName: process.env.CLOUDINARY_NAME,
      cloudinaryFolder: process.env.CLOUDINARY_FOLDER,
      gtagId: process.env.GTAG_ID,
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dln1d8lhn/image/upload/v1731406896'    },
  },



  compatibilityDate: '2024-08-13',
})