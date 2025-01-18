// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Uno - Admin Dashboard",
      // titleTemplate: "template",
    },
    middleware: {
      "manifest-route-rule": { override: true },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    // "nuxt-lucide-icons",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-lodash",
  ],

  css: [
    "simplebar-vue/dist/simplebar.min.css",
    "notivue/notification.css",
    "notivue/animations.css",
    // "nprogress/nprogress.css"
  ],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "last" }],
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },

  image: {
    format: ["webp"],
    quality: 80,
  },

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

  // lucide: {
  //   namePrefix: "Icon",
  // },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    { path: "~/sections", pathPrefix: false },
  ],

  // lodash: {
  //   prefix: "_",
  //   prefixSkip: ["string"],
  //   upperAfterPrefix: false,
  //   exclude: ["map"],
  //   alias: [
  //     ["camelCase", "stringToCamelCase"], // => stringToCamelCase
  //     ["kebabCase", "stringToKebab"], // => stringToKebab
  //     ["isDate", "isLodashDate"], // => _isLodashDate
  //   ],
  // },

  routeRules: {
    // "/": { swr: true, cache: { maxAge: 10 } },
    // "/": { isr: true, cache: { maxAge: 20 } },
    // "/learning-management": { prerender: true },
  },
});
