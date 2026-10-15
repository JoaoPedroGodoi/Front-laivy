import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Tudo que começa com /api é enviado para o backend do Laivy (porta 8080).
    // Ex.: /api/exames  ->  http://localhost:8080/exames
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        rewrite: (caminho) => caminho.replace('/api', ''),
      },
    },
  },
})
