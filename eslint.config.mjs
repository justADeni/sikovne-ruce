import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
const tsConfigs = tseslintPlugin.configs;
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPrettierConfig from "eslint-config-prettier";
const tsRecommendedRules = tsConfigs["recommended-type-checked"].rules;
const isProd = process.env.NODE_ENV === "production";
import pkg from "eslint-config-prettier";
const { rules: prettierRules } = pkg;
export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["dist", "node_modules"]
  },

  {
    files: ["./src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslintPlugin,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...tsRecommendedRules,
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/await-thenable": "off",
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
          allowHigherOrderFunctions: false
        }
      ],
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/unbound-method": "error",

      "no-unused-vars": "off",
      "no-console": isProd ? ["error", { allow: ["warn", "error"] }] : "off",
      "no-debugger": isProd ? "error" : "warn",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "consistent-return": "error",
      "object-shorthand": ["error", "always"],
      "no-useless-catch": "error",
      "no-duplicate-imports": "error",

      "react/jsx-no-useless-fragment": "error",
      "react/self-closing-comp": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  },
  eslintPrettierConfig
];
