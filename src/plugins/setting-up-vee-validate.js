import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import { extend, localize } from 'vee-validate';

export default function () {
  // extend all needed validation rules
  Object.keys(rules).forEach((rule) => extend(rule, rules[rule]));

  // set up custom rules
  extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: 'Password confirmation does not match',
  });

  // set up language of validation errors
  localize('en', en);
}
