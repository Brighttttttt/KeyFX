import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        cssCodeSplit: true,
        css: {
            postcss: {
                plugins: [
                    require('cssnano')({ preset: 'default' }), // Minify CSS using cssnano
                ],
            },
        },
    },
})
