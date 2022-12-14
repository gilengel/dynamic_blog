import { fileURLToPath, URL } from "node:url";

/* eslint import/no-unresolved: [1, { ignore: ['vitest'] }] */
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],

      statements: 100,
      functions: 100,
      branches: 100,
      lines: 100,
    },

    globals: true,
    environment: "jsdom",
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
