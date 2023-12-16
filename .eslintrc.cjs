module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['react-app', './.eslintrc.app.cjs', 'plugin:prettier/recommended'],
};
