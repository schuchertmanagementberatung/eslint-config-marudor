const bestPractice = require('./rules/bestPractice');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const stylistic = require('./rules/stylistic');
const variables = require('./rules/variables');
const flow = require('./rules/flow');
const classProperty = require('./rules/classProperty');

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  ecmaFeatures: {
    modules: true,
  },
  rules: Object.assign({}, bestPractice, errors, es6, stylistic, variables, flow, classProperty),
  plugins: [
    'flow-vars',
    'class-property',
  ],
};
