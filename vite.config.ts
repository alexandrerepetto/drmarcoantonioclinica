import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterVite } from "@tanstack/router-plugin/vite"; // MUDANÇA AQUI
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackRouterVite(), // Usando o plugin do Router que é compatível
    tsconfigPaths(),
    tailwindcss(),
    react(),
  ],
  build: {
    target: "es2022",
    outDir: "dist", // Garante que a saída seja na pasta dist
  }
});
