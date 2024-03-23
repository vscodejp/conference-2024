import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://vscodejp.github.io",
  base: "/conference-2024",
  integrations: [tailwind(), icon(), purgecss()]
});