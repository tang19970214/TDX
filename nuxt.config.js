import router from "./router.js";

export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  router: {
    // base: "/form/",
    // mode: "hash",
    scrollBehavior: () => ({ y: 0 }),
    extendRoutes(routes, resolve) {
      return router;
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '台灣產業數位轉型量表TDX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: "og:locale", content: "zh_TW" },
      // { property: "og:url", content: "https://dtrl.tw/" },
      { property: "og:url", content: "http://tdx.yummydesign.com.tw/" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "台灣產業數位轉型量表TDX" },
      { property: "og:site_name", content: "台灣產業數位轉型量表TDX" },
      // { property: 'og:image', content: "https://dtrl.tw/img/home-icon.002989f.svg" },
      { property: 'og:image', content: "http://tdx.yummydesign.com.tw/img/home-icon.002989f.svg" },
      { name: 'keywords', content: '台灣產業數位轉型量表, TDX, 台灣產業, 數位量表, 數位轉型量表, Taiwan Digtal Transformation Index'},
      { hid: 'description', name: 'description', content: '經濟部工業局委託數位經濟暨產業發展協會、台灣經濟研究院、資策會執行「數位轉型基盤建構先期推動計畫」，其中重要的工作為發展與推動企業的數位轉型量表- 台灣產業數位轉型量表- TDX，現階段已針對製造業(扣件、紡織)、服務業(餐飲)、資訊服務業進行量表設計。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // SCSS file in the project
    '@/assets/scss/index.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/element-ui/element-ui', mode: 'client', ssr:false },
    { src: '~/plugins/apexchart/apexchart.js', mode: 'client', ssr:false },
    { src:'~/plugins/wordCloud/vuewordcloud.js', mode: 'client', ssr:false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui'],
    publicPath: "http://tdx.yummydesign.com.tw/",
    // publicPath: "https://dtrl.tw/"
  }
}
