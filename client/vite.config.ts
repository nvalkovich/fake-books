import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
