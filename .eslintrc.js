const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true, // stop ESLint from looking for a configuration file in parent folders
  extends: ['@kiwicom/eslint-config'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  rules: {
    'react/sort-comp': ERROR,
    'no-unused-vars': [ERROR, { args: 'after-used' }],
    'no-restricted-imports': [ERROR],
  },

  // set each global variable name equal to true to allow the variable to be overwritten or
  // false to disallow overwriting
  globals: {
    fetch: false, // already by default in RN
    FormData: false, // already by default in RN
    __DEV__: false, // already by default in RN
  },
};
