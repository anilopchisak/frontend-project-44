import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: {
    globals: globals.browser
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'import/prefer-default-export': 'off',
    'default-case': 'error',
    'object-shorthand': ['error', 'always'],
  },
  },
  pluginJs.configs.recommended,
];
