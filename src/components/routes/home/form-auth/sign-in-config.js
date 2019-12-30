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
    rules: 'alpha_dash|required',
    placeholder: 'Password',
  },
];
