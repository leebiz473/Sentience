// @ts-check

import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "eslint.config.mjs",       // Ignore the ESLint config file
            "src/reportWebVitals.ts",  // Ignore specific TypeScript file
            "node_modules/",           // Ignore node_modules folder
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    perfectionist.configs["recommended-natural"],
);
