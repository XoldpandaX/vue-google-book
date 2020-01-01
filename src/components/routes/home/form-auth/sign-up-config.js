export default [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    model: 'email',
    rules: 'required|email',
    placeholder: 'E-Mail',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    model: 'password',
    rules: 'alpha_dash|required|min:6',
    placeholder: 'Password',
  },
  {
    id: 'confirm',
    name: 'confirmPassword',
    type: 'password',
    model: 'confirmPassword',
    rules: 'alpha_dash|required|min:6|password:@password',
    placeholder: 'Confirm password',
  },
];
