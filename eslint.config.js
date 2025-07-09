import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-plugin-prettier/recommended";
import compat from "eslint-plugin-compat";
import storybook from "eslint-plugin-storybook";
import promise from "eslint-plugin-promise";
import sonar from "eslint-plugin-sonarjs";
import a11y from "eslint-plugin-jsx-a11y";
import cypress from "eslint-plugin-cypress";

export default tseslint.config([
  globalIgnores(["dist", "storybook-static", "coverage"]),
  {
    ignores: [
      "vitest.config.ts",
      "src/vite-env.d.ts",
      ".storybook/**",
      "cypress.config.ts",
    ],
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      unicorn.configs.recommended,
      sonar.configs.recommended,
      promise.configs["flat/recommended"],
      a11y.flatConfigs.recommended,
      compat.configs["flat/recommended"],
      cypress.configs.recommended,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "unicorn/prevent-abbreviations": [
        "error",
        {
          ignore: ["\e2e$", /^ignore/i],
        },
      ],
    },
  },
  {
    files: ["**/*.stories.*"],
    extends: [storybook.configs["flat/recommended"]],
  },
]);
