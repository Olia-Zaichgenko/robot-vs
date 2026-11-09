import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: 'http://192.168.1.37:5001/',
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {target: 'esnext', minify: false},
    server: { headers: { 'Access-Control-Allow-Origin': '*' } },
    preview: {
        host: '0.0.0.0',
        port: 5001,
        strictPort: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    },
})
