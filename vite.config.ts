import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Configuração oficial para um projeto TanStack Start com Tailwind v4
export default defineConfig({
  plugins: [
    tanstackStart(),
    tsconfigPaths(),
    tailwindcss(),
    react(),
  ],
  // Garante que o build funcione corretamente em ambientes como Cloudflare/Vercel
  build: {
    target: "es2022",
  }
});
