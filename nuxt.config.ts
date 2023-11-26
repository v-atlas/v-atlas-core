// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    [
      "@pinia/nuxt",
      {
        disableVuex: true,
        autoImports: ["acceptHMRUpdate"],
      },
    ],
  ],
  pinia: {
    storesDirs: ["stores"],
  },
  $production: {
    routeRules: {
      "/**": {
        static: true,
      },
    },
  },
  $development: {
    devtools: { enabled: true },
  },
  devtools: { enabled: true },
  googleFonts: {
    display: "swap",
    preconnect: true,
    families: {
      Lato: [300, 400, 500, 600, 700],
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "0.0.0.0",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "normalize.css";
          @use "@/assets/scss/_colors.scss" as *;`,
        },
      },
    },
  },
});
