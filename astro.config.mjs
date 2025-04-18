// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ["4321-darkhaamn-awscommunity-u6acxavu3b3.ws-us118.gitpod.io"]
  }
});
