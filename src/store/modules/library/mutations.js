import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_USER](state, { user }) {
    state.user = user;
  },
};
