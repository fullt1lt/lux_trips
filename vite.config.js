import { defineConfig } from "vite";

export default defineConfig({
  base: "/lux_trips/", // Укажите базовый путь для GitHub Pages
  build: {
    assetsDir: "assets", // Папка для ассетов
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Простая структура путей
      },
    },
  },
});
