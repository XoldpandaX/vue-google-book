import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_WINDOW_WIDTH](state, { width }) {
    state.windowWidth = width;
  },
};
