import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
  ],
  base: "",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
          elementplus: ["element-plus"],
        },
      },
    },
  },
});
