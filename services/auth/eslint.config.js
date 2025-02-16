import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    files: ['**/*.js'],
    ignores: ['**/node_modules/**', 'coverage/**', 'dist/**', '.husky/**'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Possible Problems
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-duplicate-imports': 'error',
      'no-constant-binary-expression': 'error',

      // Suggestions
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
      ],

      // Prettier Integration
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          bracketSpacing: true,
          arrowParens: 'avoid',
          endOfLine: 'lf',
        },
      ],

      // ES6
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-confusing-arrow': 'error',

      // Best Practices
      curly: ['error', 'all'],
      'default-case': 'error',
      'dot-notation': 'error',
      'no-else-return': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'error',
    },
  },
  js.configs.recommended,
  prettier,
];
