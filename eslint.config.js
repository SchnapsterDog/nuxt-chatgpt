// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
    // Base JS rules
    js.configs.recommended,

    // Global language options
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // Project rules (keep minimal & permissive)
    {
        rules: {
            "no-console": "off",
            "no-debugger": "warn",
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "no-undef": "off", // Nuxt auto-imports (#imports, defineNuxtConfig, etc.)
        },
    },

    // Ignore generated folders
    {
        ignores: [
            "dist/**",
            ".nuxt/**",
            ".output/**",
            "node_modules/**",
            "coverage/**",
            "playground/.nuxt/**",
            "playground/.output/**",
        ],
    },
];
