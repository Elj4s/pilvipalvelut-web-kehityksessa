import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/pilvipalvelut-web-kehityksessa/viikko3-sovellus/',
})
