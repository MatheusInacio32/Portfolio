import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  server: { port: 3000 },
  build: {
    // A Vercel publica a pasta "build" desde a época do Create React App.
    outDir: 'build',
  },
})
