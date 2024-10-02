import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  chunkSizeWarningLimit: 2000, // Set to 2000kB (2MB)
});
