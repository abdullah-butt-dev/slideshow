import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "build", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["webpack.*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
