import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules", "dist"]
    }),
    tailwindcss()
  ],
  css: {
    modules: {
      scopeBehaviour: "local"
    }
  },
  base: "/sikovne-ruce"
});
