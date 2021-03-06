module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: false,
    es6: true,
    mocha: false,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-var': 1,
    'no-eval': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'info'] }],
    'space-before-function-paren': ['error', 'never'],
    'prefer-arrow-callback': [0, { allowNamedFunctions: true }],
    'func-names': ['error', 'never'],
    'no-use-before-define': [
      'error', {
        functions: true,
        classes: true,
      }
    ],
    'max-nested-callbacks': [
      'error',
      5,
    ],
  },
};
