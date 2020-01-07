import * as mutationTypes from './mutation-types';

export default {
  async changeWindowWidth({ commit }, { width } = {}) {
    commit(mutationTypes.SET_WINDOW_WIDTH, { width });
  },
};
