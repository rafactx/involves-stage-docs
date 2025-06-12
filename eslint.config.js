// eslint.config.js

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import path from 'path';
import { fileURLToPath } from 'url';

// Suporte a __dirname e __filename em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Compatibilidade com configurações legacy (extends do ESLint antigo)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  // 🚫 Ignora pastas desnecessárias e arquivos MDX
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/out/**',
      '**/.turbo/**',
      '**/build/**',
      '**/.cache/**',
      '**/*.mdx', // Ignora arquivos MDX temporariamente
    ],
  },

  // 🔗 Config base do JavaScript para arquivos JS na raiz
  {
    files: ['*.js', '*.mjs'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 🔗 Configs do Next.js e Prettier para todos arquivos JS/JSX/TS/TSX
  ...compat.extends('next/core-web-vitals', 'prettier').map((config) => ({
    ...config,
    rules: {
      ...config.rules,
      '@next/next/no-html-link-for-pages': ['error', ['website/src/pages', 'docs/pages']],
    },
  })),

  // 🧠 Configuração para arquivos TypeScript no diretório docs
  {
    files: ['docs/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // 🧠 Configuração para arquivos TypeScript no diretório website
  {
    files: ['website/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // 🎨 Prettier para todos os arquivos JS/TS
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    settings: {
      next: {
        rootDir: ['website/', 'docs/'],
      },
    },
  },
];

export default config;
