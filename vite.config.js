import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'FroalaDesigner',
      fileName: 'froala-designer',
    },
    sourcemap: true,  // 启用源映射
    // rollupOptions: {
    //     input: ["./src/component/index.js"],
    //     //     output: {
    //     //         format: 'es', // 使用 ES 模块格式
    //     //         entryFileNames: 'build/[name].js',
    //     //     }
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
