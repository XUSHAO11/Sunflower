import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.github.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/yimianimg": {
        target: "https://api.yimian.xyz/img/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yimianimg/, ""),
      },
    },
  },
});
