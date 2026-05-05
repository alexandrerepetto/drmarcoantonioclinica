import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/vite"; // Plugin correto para Start
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart(), // O TanStack Start gerencia o roteamento e o HTML automaticamente
    tsconfigPaths(),
    tailwindcss(),
    react(),
  ],
});
