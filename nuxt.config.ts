// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

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
      titleTemplate: "template",
    },
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
  experimental: {
    componentIslands: true,
  },
  css: ["simplebar-vue/dist/simplebar.min.css"],
});
