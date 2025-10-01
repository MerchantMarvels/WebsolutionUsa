import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/pet-grooming/' : '/', // dev at '/', build at '/pet-grooming/'
}));
