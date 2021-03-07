module.exports = {
  extends: ['airbnb', 'plugin:cypress/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: false,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': ['error', 'never'],
    'react/require-default-props': [0],
    'react/forbid-prop-types': [0],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'no-var': 1,
    'no-eval': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-console': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'prefer-arrow-callback': [0, { allowNamedFunctions: true }],
    'func-names': ['error', 'never'],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
      },
    ],
    'max-nested-callbacks': ['error', 5],
  },
};
