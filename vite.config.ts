import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import codspeedPlugin from '@codspeed/vitest-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codspeedPlugin()],
})
