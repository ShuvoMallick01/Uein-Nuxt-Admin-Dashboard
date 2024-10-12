// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  app: {
    head: {
      title: "Uein - Admin Dashboard",
      // titleTemplate: "template",
    },
    // pageTransition: {
    //   name: "page",
    //   mode: "in-out", // default
    // },
    // layoutTransition: {
    //   name: "layout",
    //   mode: "out-in", // default
    // },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
    "@vueuse/nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  lucide: {
    namePrefix: "Icon",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
      // extensions: [".vue"],
    },
    { path: "~/sections", pathPrefix: false },
  ],

  routeRules: {
    // "/": { swr: true, cache: { maxAge: 10 } },
    "/": { isr: true, cache: { maxAge: 20 } },
    "/learning-management": { prerender: true },
  },

  // experimental: {
  //   componentIslands: true,
  // },
  css: ["simplebar-vue/dist/simplebar.min.css"],
});
