import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_USER](state, { user }) {
    state.user = user;
  },
  [mutationTypes.REMOVE_USER](state) {
    state.user = {};
  },
  [mutationTypes.SET_PROCESS_STATUS](state, { isInProcess }) {
    state.isInProcess = isInProcess;
  },
};
