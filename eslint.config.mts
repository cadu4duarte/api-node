// eslint.config.mts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS/TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      // parser, ecmaVersion, sourceType, etc. se precisar
      globals: globals.node,
    },
    // Usa o config recomendado do @eslint/js
    ...js.configs.recommended,
  },

  // TypeScript (configs oficiais do typescript-eslint para flat config)
  ...tseslint.configs.recommended,

  // JSON
  {
    files: ["**/*.json"],
    language: "json/json",
    ...json.configs.recommended,
  },

  // JSONC
  {
    files: ["**/*.jsonc"],
    language: "json/jsonc",
    ...json.configs.recommended,
  },

  // Markdown
  {
    files: ["**/*.md"],
    language: "markdown/gfm",
    ...markdown.configs.recommended,
  },

  // CSS
  {
    files: ["**/*.css"],
    language: "css/css",
    ...css.configs.recommended,
  },

  // Regras globais extra
  {
    rules: {
      semi: ["warn", "always"],
      "@typescript-eslint/no-empty-interface": "off"
    },
  },
]);