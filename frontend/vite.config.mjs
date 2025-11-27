import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // IMPORTANT: ensures chunks load from root
  plugins: [react()],
  server: {
    host: true,
    port: 5173,

    // FIX for Windows file watcher problems + chunk reload issues
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});