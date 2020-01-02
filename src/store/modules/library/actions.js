import * as mutationTypes from './mutation-types';
import { addFavoriteBook, searchBooks } from './services';
import { mapFavoriteBooks, mapSearchResults, mapSearchTips } from './mappers';

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
  async performSearch({ commit, dispatch }, { query }) {
    try {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: true });

      await dispatch('setQueryString', { query });
      const books = await searchBooks({ query }).then(mapSearchResults);

      if (books) {
        commit(mutationTypes.SET_BOOK_LIST, { books });
        commit(mutationTypes.SET_SEARCH_TIPS, { tips: mapSearchTips(books) });
      }
    } catch (e) {
      console.error(e, 'error while performSearch');
    } finally {
      commit(mutationTypes.SET_PROCESS_STATUS, { isInProcess: false });
    }
  },
  setQueryString({ commit }, { query }) {
    commit(mutationTypes.SET_QUERY_STRING, { query });
  },
  resetQueryString({ commit }) {
    commit(mutationTypes.RESET_QUERY_STRING);
  },
  setChosenBookInfo({ commit, getters }, { bookId }) {
    commit(mutationTypes.SET_CHOSEN_BOOK_INFO, {
      book: getters.booksList.filter((book) => bookId === book.id),
    });
  },
  resetSearchTips({ commit }) {
    commit(mutationTypes.RESET_SEARCH_TIPS);
  },
};
