module.exports = {
  extends: ['plugin:typescript-sort-keys/recommended'],
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['sort-keys-fix', 'typescript-sort-keys'],
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'warn',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
  }
}