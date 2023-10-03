import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { YikeResolver } from '@yike-design/resolver/dist/index';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [YikeResolver],
    }),
  ],
});
