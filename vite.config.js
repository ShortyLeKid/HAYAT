import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuration pour spécifier le dossier des ressources statiques
  build: {
    assetsDir: 'public'
  }
})
