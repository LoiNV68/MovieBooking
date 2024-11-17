import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/assets/css/main.css', // Các file CSS khác
                'resources/assets/js/main.js'    // Các file JS khác
            ],
            refresh: true,
        }),
        react(),
    ],
});
