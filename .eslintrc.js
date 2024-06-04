/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'import',
  ],
  extends: [
    'next/core-web-vitals',
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
    'prettier',
  ],
  root: true,
  env: {
    es2022: true,
    node: true,
    jest: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    // "unused-imports/no-unused-vars": [
    //     "error",
    //     { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    // ],
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    // stupid ass rule
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'no-prototype-builtins': 'off',
    'no-var': 'off',
  },
  ignorePatterns: [
    '**/.eslintrc.js',
    '**/*.config.(t|j)s$',
    '**/*.{scss,css}$',
    'package-lock.json',
    '.next',
    '.devops',
  ],
};

module.exports = config;
