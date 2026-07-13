import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export const reactConfig = [
    {
        ignores: [
            "dist",
            "coverage",
            "*.config.js",
            "*.config.cjs",
            "*.config.mjs"
        ]
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            globals: globals.browser,

            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true
                }
            ],

            "no-console": "warn",
            "prefer-const": "error"
        }
    }
];