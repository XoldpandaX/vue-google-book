import * as mutationTypes from './mutation-types';
import { signUpUser, signInUser, signOutUser } from './services';
import { mapUser } from './mappers';

export default {
  async signUp({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: true });

      const { user } = await signUpUser({ email, password });
      await dispatch('saveUser', user);
    } catch (e) {
      console.error(e, 'error while signUp');
    } finally {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: false });
    }
  },
  async signIn({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: true });

      const { user } = await signInUser({ email, password });
      await dispatch('library/fetchAllUserFavoriteBooks', { userId: user.uid }, { root: true });
      await dispatch('saveUser', user);
    } catch (e) {
      console.error(e, 'error while signIn');
    } finally {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: false });
    }
  },
  async signOut({ commit }) {
    try {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: true });

      await signOutUser();
      commit(mutationTypes.REMOVE_USER);
    } catch (e) {
      console.error(e, 'error while signOut');
    } finally {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: false });
    }
  },
  saveUser({ commit }, rawUserData) {
    commit(mutationTypes.SET_USER, {
      user: mapUser(rawUserData),
    });
  },
};
