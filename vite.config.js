import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import ViteJest from 'vite-plugin-jest'; // Import the Jest plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});