import globals from "globals";
import tseslintParser from "@typescript-eslint/parser";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  // Global ignores
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "playwright-report/**",
      "*.config.js",
      "*.config.ts",
      "public/sw.js", // Ignore SW for now, needs specific env
      "e2e/**", // Ignore e2e tests from default TS checks
    ],
  },
  // Base ESLint Recommended
  js.configs.recommended,

  // TypeScript Files Configuration
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslintPlugin.configs.recommendedTypeChecked,
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        // Define globals used in specific files if needed, e.g., main.tsx
        process: "readonly", // Define process for main.tsx
      },
    },
  },

  // React Files Configuration
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // React Hooks Configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // Jest Test Files Configuration
  {
    files: ["**/*.{test,spec}.{ts,tsx}"],
    ...jestPlugin.configs["flat/recommended"], // Apply Jest recommended rules
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // Add any specific Jest rule overrides here if needed
      ...jestPlugin.configs["flat/recommended"].rules,
      // Allow TS parser for type-aware linting within tests if desired
      // but ensure project settings don't cause conflicts if tests aren't in tsconfig
    },
  },

  // Prettier Configuration (must be last)
  eslintPluginPrettierRecommended,
];
