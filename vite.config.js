import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import md from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    preact(),
    md({
      mode: "html",
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
