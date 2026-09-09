// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://milind-dalakoti.github.io/Portfolio-Website",
  base: "/Portfolio-Website",
  output: "static",
  // Hide the Astro dev toolbar (the small badge that injects in the page
  // during `astro dev`). Production builds never include it; this just
  // suppresses it in dev too, so the local preview matches the live site.
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": srcDir,
      },
    },
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },
});
