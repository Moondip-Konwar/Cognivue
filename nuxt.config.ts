import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxt/ui'],
  ui: {
    colors: {
      
    }
  },
  app: {
      baseURL: '/Cognivue/' // Important for GH Pages routing
    },
    nitro: {
        preset: 'github-pages'
      }
});
