import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  // For GitHub Pages deployment, add the following line to set the base path:
  base: "/https://mahmudpial.github.io/image-collection-list-design-with-vue-js/", // ← replace with your GitHub repo name
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
