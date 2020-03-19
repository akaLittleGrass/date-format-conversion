module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    'arrow-parens': 1,
    'generator-star-spacing': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 1,
    'quotes': 1,
    'comma-dangle': 1,
    'semi': 1,
    'no-trailing-spaces': 1,
    'keyword-spacing': 1,
    'spaced-comment': 1,
    'no-unused-vars': 1,
    'space-before-function-paren': 1,
    'comma-spacing': 1,
    'space-infix-ops': 1,
    'space-before-blocks': 1,
    'space-in-parens': 1
  }
}
