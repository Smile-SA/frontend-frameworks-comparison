import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: nodejs({
    mode: "standalone",
  }),
  integrations: [react()],
  output: "hybrid",
});
