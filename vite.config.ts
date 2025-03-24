import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [vue(), tailwindcss()],
});
