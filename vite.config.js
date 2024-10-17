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
      name: 'vue2Froala',
      fileName: 'vue2-froala',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    // sourcemap: true,  // 启用源映射
    // rollupOptions: {
    //     input: ["./src/component/index.js"],
    //     //     output: {
    //     //         format: 'es', // 使用 ES 模块格式
    //     //         entryFileNames: 'build/[name].js',
    //     //     }
    // }
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
