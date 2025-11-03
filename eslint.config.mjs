import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import typescriptParser from '@typescript-eslint/parser';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...compat.extends(
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'prettier'
    ),
    {
        ignores: ['.next/', '*.config.js',  '*.config.mjs',  '*.config.ts', 'sitemap.ts'],
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
            'no-relative-import-paths': noRelativeImportPaths,
        },

        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json', // Ensure this is correct
                tsconfigRootDir: __dirname,
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                React: true,
                JSX: true,
            },
        },
        rules: {
            // TypeScript-specific rules
            '@next/next/no-duplicate-head': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': true,
                    'ts-nocheck': true,
                    'ts-check': false,
                    minimumDescriptionLength: 5,
                },
            ],
            "@typescript-eslint/explicit-function-return-type": "error",
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/prefer-literal-enum-member': [
                'error',
                {
                    allowBitwiseExpressions: true,
                },
            ],
            '@typescript-eslint/prefer-string-starts-ends-with': [
                'error',
                {
                    allowSingleElementEquality: 'always',
                },
            ],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-empty-object-type': 'error',
            //new rull
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/class-literal-property-style': 'error',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            //   '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-type-assertions': 'error',
            '@typescript-eslint/consistent-type-definitions': 'error',
            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': 'error',
            '@typescript-eslint/no-confusing-non-null-assertion': 'error',
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'off', //todo add when implement logic
            '@typescript-eslint/no-inferrable-types': 'error',
            // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
            '@typescript-eslint/prefer-find': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            // '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            // '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-regexp-exec': 'error',
            "@typescript-eslint/no-duplicate-enum-values": "off",
            // Other rules (simple-import-sort, unused-imports, etc.)
            'unused-imports/no-unused-imports': 'warn',
            'import/no-anonymous-default-export': [
                'warn',
                {allowArray: true},
            ],
            'no-relative-import-paths/no-relative-import-paths': [
                'warn',
                {allowSameFolder: true},
            ],
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^@?\\w', '^\\u0000'],
                        ['^.+\\.s?css$'],
                        ['^@/lib', '^@/hooks'],
                        ['^@/data'],
                        ['^@/components', '^@/container'],
                        ['^@/store'],
                        ['^@/'],
                        [
                            '^\\./?$',
                            '^\\.(?!/?$)',
                            '^\\.\\./?$',
                            '^\\.\\.(?!/?$)',
                            '^\\.\\./\\.\\./?$',
                            '^\\.\\./\\.\\.(?!/?$)',
                            '^\\.\\./\\.\\./\\.\\./?$',
                            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
                        ],
                        ['^@/types'],
                        ['^'],
                    ],
                },
            ],
        },
    },
];
