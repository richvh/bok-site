// docs/vite.config.js
import { SimpleSearch } from "vitepress-plugin-simple-search";
import { defineConfig } from "vite";

const re = new RegExp("{{.*}}|#|<.*>", "gim");

export default defineConfig({
  plugins: [
    SimpleSearch(
      {
        partialsToIgnore: [
          "classes",
          "professions",
          "creatures",
          "npcs",
          "index.md",
          "tips.md",
        ],
        regexForContentStripping: re
      }
    )
  ],
});
