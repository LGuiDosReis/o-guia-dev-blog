export default {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337",
  },
  generate: {
    fallback: true,
  },

  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "O guia do desenvolvedor das galáxias",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "../static/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Staatliches" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["uikit/dist/css/uikit.min.css", "uikit/dist/css/uikit.css", "@assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo", "@nuxtjs/markdownit", "@nuxtjs/pwa"],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL || "http://localhost:1337/graphql",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  pwa: {
    meta: {
      title: "O guia dev",
      author: "Luiz Guilherme Mendonça dos Reis",
    },
    manifest: {
      name: "O guia do desenvolvedor das galáxias",
      short_name: "O guia dev",
      lang: "pt-br",
    },
    // icon: {
    // fileName: "favicon.ico",
    // },
  },
};
