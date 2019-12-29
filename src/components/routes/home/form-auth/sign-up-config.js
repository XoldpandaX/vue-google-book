export default [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    model: 'name',
    rules: 'required|alpha|min:2',
    placeholder: 'User name',
  },
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
    rules: 'required|min:6|password:@confirmPassword',
    placeholder: 'Password',
  },
  {
    id: 'confirm',
    name: 'confirmPassword',
    type: 'password',
    model: 'confirmPassword',
    rules: 'required',
    placeholder: 'Confirm password',
  },
];
