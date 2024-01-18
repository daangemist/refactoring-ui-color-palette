import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      /* plugin options */
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        dir: "./dist/",
        entryFileNames: "ui-color-palette.js",
        assetFileNames: "ui-color-palette.css",
        manualChunks: undefined,
      },
    },
  },
});
