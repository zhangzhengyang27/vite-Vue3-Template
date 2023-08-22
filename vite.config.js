import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // 设置输出目录
    assetsDir: 'assets', // 设置静态资源目录
    minify: 'terser' // 设置代码压缩方式
  },
  // 配置文件引用别名 alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 全局配置  样式变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  }
})
