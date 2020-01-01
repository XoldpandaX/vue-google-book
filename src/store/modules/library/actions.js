// import * as mutationTypes from './mutation-types';
import { addFavoriteBook } from './services';
import { mapFavoriteBooks } from './mappers';

export default {
  async addBookToFavorite({ commit }) {
    try {
      await addFavoriteBook({ userId: 25675 });
      console.info(mapFavoriteBooks);
      console.info(commit);
    } catch (e) {
      console.error(e, 'error while addBookToFavorite');
    }
  },
};
