import * as mutationTypes from './mutation-types';
import { waitFor } from '@/utils';
import { addFavoriteBook, fetchBooks, getSearchTips } from './services';
import {
  mapFavoriteBooks,
  mapSearchResults,
  mapSearchTips,
  mapChosenBook,
} from './mappers';


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
  async fetchSearchTips({ commit, dispatch }, { query }) {
    try {
      commit(mutationTypes.SET_LOADING_TIPS_STATUS, { isTipsLoading: true });

      await dispatch('setQueryString', { query });
      const searchTips = await getSearchTips({ query }).then(mapSearchTips);

      commit(mutationTypes.SET_SEARCH_TIPS, { tips: searchTips });
    } catch (e) {
      console.error(e, 'error while fetchSearchTips');
    } finally {
      commit(mutationTypes.SET_LOADING_TIPS_STATUS, { isTipsLoading: false });
    }
  },
  setQueryString({ commit }, { query }) {
    commit(mutationTypes.SET_QUERY_STRING, { query });
  },
  resetQueryString({ commit }) {
    commit(mutationTypes.RESET_QUERY_STRING);
  },
  async pickBook({ commit, getters }, { bookId }) {
    try {
      commit(mutationTypes.SET_LOADING_BOOK_INFO_STATUS, { isBookInfoLoading: true });
      await waitFor(500);

      const chosenBook = mapChosenBook(
        getters.chosenBookList.filter((book) => bookId === book.id)[0],
      );
      commit(mutationTypes.SET_CHOSEN_BOOK_INFO, { book: chosenBook });
    } catch (e) {
      console.error(e, 'error while pickBook');
    } finally {
      commit(mutationTypes.SET_LOADING_BOOK_INFO_STATUS, { isBookInfoLoading: false });
    }
  },
  async pickBookFromSearchTips({ dispatch }, { bookId, bookIdx }) {
    try {
      await dispatch('fetchChosenBooksList', { startIdx: bookIdx });
      await dispatch('pickBook', { bookId });
    } catch (e) {
      console.error(e, 'error while pickBookFromSearchTips');
    }
  },
  async fetchChosenBooksList({ commit, getters }, { isLoadMore = false, query = '', startIdx = 0 }) {
    try {
      // when search field onPressEnter use query from search field,
      // if clicked on the search tip uses saved query from the app state
      const querySource = query || getters.queryString;

      if (querySource) {
        commit(mutationTypes.SET_LOADING_BOOKS_STATUS, { isBooksLoading: true });

        const { books, totalItems } = await fetchBooks({
          query: querySource,
          startIdx,
        }).then(mapSearchResults);

        if (books.length && getters.isNothingFound) {
          commit(mutationTypes.SET_NOTHING_FOUND_STATUS, { isNothingFound: false });
        }

        if (!books.length) {
          commit(mutationTypes.SET_NOTHING_FOUND_STATUS, { isNothingFound: true });
        }

        if (!isLoadMore) {
          commit(mutationTypes.SET_CHOSEN_QUERY, { chosenQuery: querySource });
          commit(mutationTypes.SET_CHOSEN_TOTAL_ITEMS, { chosenTotalItems: totalItems });
        }

        commit(mutationTypes.SET_CHOSEN_BOOK_LIST, { chosenBookList: books });
      }
    } catch (e) {
      console.error(e, 'error while fetchChosenBooksList');
    } finally {
      commit(mutationTypes.SET_LOADING_BOOKS_STATUS, { isBooksLoading: false });
    }
  },
  resetSearchTips({ commit }) {
    commit(mutationTypes.RESET_SEARCH_TIPS);
  },
};
