// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
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
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  $production: {
    routeRules: {
      "/**": {
        static: true,
      },
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    display: "swap",
    preconnect: true,
    families: {
      "Plus Jakarta Sans": true,
      "Helvetica Neue": true,
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "0.0.0.0",
      },
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  runtimeConfig: {
    frontendUrl: "",
    // Spotify Configuration
    spotifyClientId: "",
    spotifyClientSecret: "",
    spotifyRedirectUrl: "",
    spotifyApiUrl: "https://api.spotify.com",
    spotifyAccountUrl: "https://accounts.spotify.com",
    // Google Cloud Configuration
    googleCloudClientId: "",
    googleCloudClientSecret: "",
    googleCloudRedirectUrl: "",
  },
});
