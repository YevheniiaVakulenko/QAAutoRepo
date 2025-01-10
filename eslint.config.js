import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      "no-unused-vars": "warn",
      "no-trailing-spaces": "error",
			indent: ["error", 2],
			semi: ["error", "always"],
		},
	},
  pluginJs.configs.recommended,
];
