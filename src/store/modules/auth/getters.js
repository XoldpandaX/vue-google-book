import isEmpty from 'lodash.isempty';

export default {
  isUserLoggedIn: ({ user }) => !isEmpty(user),
  isAuthInProcess: ({ isInProcess }) => isInProcess,
};
