import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/recommended";
import vitest from "eslint-plugin-vitest";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  solid,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.test.{jsx,tsx,js,ts}"],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    },
  },
];