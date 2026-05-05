import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"; // MUDANÇA: T, S, R e V maiúsculos
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // MUDANÇA: Nome corrigido aqui também
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    target: "es2022",
  }
});
