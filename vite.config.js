import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js', 'resources/css/app.css'], // Rutas de entrada de tus archivos
      refresh: true, // Habilita la actualización en caliente durante el desarrollo
    }),
  ],
});
