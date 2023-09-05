import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  "base" : "./shitatmiyu.github.io/",
  plugins: [react()],
})
