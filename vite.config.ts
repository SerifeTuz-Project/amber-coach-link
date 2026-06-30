import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Use Vercel preset when building on Vercel; otherwise emit a Cloudflare
// module bundle into `dist/` so Lovable's preview/dist-check finds the output.
const isVercel = !!process.env.VERCEL;

const nitroOptions = isVercel
  ? { preset: "vercel" as const }
  : {
      preset: "cloudflare-module" as const,
      output: {
        dir: "dist",
        serverDir: "dist/server",
        publicDir: "dist/client",
      },
    };

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    react(),
    nitro(nitroOptions),
  ],
});
