// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      title: `Nuxt 3 Admin Dashboard`,
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Uno is a high-performance, modern Nuxt 3 admin dashboard template designed for scalability and customization.",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-lodash",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],

  colorMode: {
    preference: "light",
    fallback: "light",
    // hid: "nuxt-color-mode-script",
    // globalName: "__NUXT_COLOR_MODE__",
    // componentName: "ColorScheme",
    // classPrefix: "",
    classSuffix: "",
    // storage: "localStorage", // or 'sessionStorage' or 'cookie'
    // storageKey: "nuxt-color-mode",
  },

  css: [
    "~/assets/css/tailwind.css",
    "simplebar-vue/dist/simplebar.min.css",
    "notivue/notification.css",
    "notivue/animations.css",
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
    quality: 85,
  },

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    { path: "~/sections", pathPrefix: false },
  ],

  icon: {
    serverBundle: {
      collections: [
        "solar",
        "tabler",
        "iconamoon",
        "heroicons",
        "pajamas",
        "majesticons",
        "mynaui",
        "radix-icons",
        "akar-icons",
        "clarity",
        "mdi",
        "material-symbols",
        "ri",
        "fluent",
        "mingcute",
        "ion",
        "mage",
        "humbleicons",
        "prime",
      ],
    },
  },

  routeRules: {
    "/": { swr: true, cache: { maxAge: 10 } },
    "/course": { prerender: true },
  },

  build: {
    transpile: ["@iconify/vue"],
  },

  runtimeConfig: {
    public: {
      appName: "Uno Admin Dashboard",
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "https://bitskyber.com/template/uno-nuxt",
    },
  },

  nitro: {
    dev: process.env.NODE_ENV !== "production", // Disable Nitro logs in production
  },
});
