import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // change to "/repo-name/" if deploy GitHub Pages subfolder
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 2000, // increase limit for big bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const parts = id.split("node_modules/")[1].split("/");
            return parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
          }
        },
      },
    },
  },
});