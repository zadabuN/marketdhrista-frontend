import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,        // ✅ Fixed port
    strictPort: true,  // ⛔ Prevents fallback to 5174, etc.
    open: true         // 🌐 Auto-opens browser on npm run dev
  }
});
