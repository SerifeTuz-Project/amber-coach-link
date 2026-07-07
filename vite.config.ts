import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const isVercel = !!process.env.VERCEL;

const nitroOptions = isVercel
  ? { preset: "vercel" as const }
  : { preset: "cloudflare-module" as const, output: { dir: "dist", serverDir: "dist/_worker.js", publicDir: "dist" } };

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: {
        entry: "server",
        ...nitroOptions,
      },
    }),
    react(),
  ],
});
