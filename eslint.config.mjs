// @ts-check

import eslint from "@eslint/js";
import process from "node:process";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "eslint.config.mjs",       // Ignore the ESLint config file
            "src/reportWebVitals.ts",  // Ignore specific TypeScript file
            "node_modules/",           // Ignore node_modules folder
        ],
        rules: {
            "quotes": ["error", "single"], // Enforce single quotes
            "semi": ["error", "always"], // Enforce semi-colons
        },
    },
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
    },
);

