import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { viteMockServe } from "vite-plugin-mock";
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'vue-router',
        'pinia'
      ]
    }),
    vueSetupExtend(),
    viteMockServe(),
  ],
  
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
