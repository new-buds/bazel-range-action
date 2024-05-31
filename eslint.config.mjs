// @ts-check

import eslint from '@eslint/js';
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from 'typescript-eslint';

export default tseslint.config({
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      eslintConfigPrettier,
      ...tseslint.configs.recommended,
    ],
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  });
