import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [react(), dts({
    include: ['lib'],
    tsconfigPath: './tsconfig.app.json',
    bundleTypes: true
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    copyPublicDir: false,
    rolldownOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom']
    }
  }
})