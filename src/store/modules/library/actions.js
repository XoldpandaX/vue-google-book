import isEmpty from 'lodash.isempty';
import * as mutationTypes from './mutation-types';
import { waitFor, getBookById } from '@/utils';
import { LIBRARY_CONSTANTS } from '@/constants';
import {
  fetchBooks,
  getSearchTips,
  getAllFavoritesBooks,
  addBookToFavorite,
} from './services';
import { mapSearchResults, mapSearchTips, mapFavoriteBooks } from './mappers';

export default {
  async fetchAllUserFavoriteBooks({ commit, rootGetters }, { userId } = {}) {
    try {
      const {
        favoriteBooks,
        favoriteTotalPages,
      } = await getAllFavoritesBooks({
        userId: rootGetters['auth/userId'] || userId,
      }).then(mapFavoriteBooks);

      commit(mutationTypes.SET_FAVORITE_BOOK_LIST, { favoriteBookList: favoriteBooks });
      commit(mutationTypes.SET_FAVORITE_TOTAL_PAGES, { favoriteTotalPages });
    } catch (e) {
      console.error(e, 'error while fetchAllUserFavoriteBooks');
    }
  },
  async addBookToFavorite({ commit, getters, rootGetters }, { selectedBook }) {
    try {
      const updatedSelection = { ...selectedBook, isInFavorite: true };

      await addBookToFavorite({
        userId: rootGetters['auth/userId'],
        selectedBook: updatedSelection,
      });

      commit(mutationTypes.UPDATE_FAVORITE_BOOK_LIST, {
        selectedBook: updatedSelection,
      });
      commit(mutationTypes.SET_FAVORITE_TOTAL_PAGES, {
        favoriteTotalPages: Math.ceil(
          getters.favoriteBookList.length / LIBRARY_CONSTANTS.BOOKS_PER_PAGE,
        ),
      });
    } catch (e) {
      console.error(e, 'error while addBookToFavorite');
    }
  },
  async changeViewMode({
    commit,
    getters,
    rootGetters,
    dispatch,
  }, { viewMode }) {
    if (viewMode === LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE && getters.favoriteBookList.length) {
      await dispatch(
        !rootGetters['ui/isSmallScreens']
          ? 'setDisplayedFavoriteBooks'
          : 'mobileSetDisplayedFavoriteBooks',
        { startIdx: 0 },
      );
    }

    if (!isEmpty(getters.chosenBook)) {
      commit(mutationTypes.RESET_CHOSEN_BOOK_INFO);
    }

    commit(mutationTypes.SET_VIEW_MODE, { viewMode });
  },
  setDisplayedFavoriteBooks({ commit, getters }, { startIdx } = {}) {
    const { BOOKS_PER_PAGE } = LIBRARY_CONSTANTS;
    const totalBooks = getters.favoriteBookList.length;

    if (startIdx > totalBooks) {
      const idealBooksQuantity = getters.favoriteTotalPages * BOOKS_PER_PAGE;
      const lastPageBooksQuantity = BOOKS_PER_PAGE - (idealBooksQuantity - totalBooks);
      const resultBooksQuantity = lastPageBooksQuantity > 0 ? lastPageBooksQuantity : BOOKS_PER_PAGE;
      const start = totalBooks - resultBooksQuantity;

      commit(mutationTypes.SET_FAVORITE_BOOK_LIST_DISPLAYED, {
        displayedBooks: getters.favoriteBookList.slice(start),
      });
    } else {
      // if start idx < 0 -> return to the very first page else go to the next
      const start = startIdx > 0 ? startIdx - 1 : startIdx;
      const end = start + BOOKS_PER_PAGE;

      commit(mutationTypes.SET_FAVORITE_BOOK_LIST_DISPLAYED, {
        displayedBooks: (
          totalBooks <= end
            ? getters.favoriteBookList.slice(start)
            : getters.favoriteBookList.slice(start, end)
        ),
      });
    }
  },
  // for mobile endless scroll
  mobileSetDisplayedFavoriteBooks({ commit, getters }, { startIdx } = {}) {
    if (getters.favoriteBookListDisplayed !== getters.favoriteBookList.length) {
      commit(mutationTypes.CONCAT_FAVORITE_BOOK_LIST_DISPLAYED, {
        favoriteBooks: getters.favoriteBookList.slice(
          startIdx, startIdx + LIBRARY_CONSTANTS.BOOKS_PER_PAGE_MOBILE,
        ),
      });
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
  async pickBook({
    commit,
    getters,
    rootGetters,
    dispatch,
  }, { bookId }) {
    try {
      commit(mutationTypes.SET_LOADING_BOOK_INFO_STATUS, { isBookInfoLoading: true });
      await waitFor(500);

      const { FAVORITES_VIEW_MODE, SEARCH_VIEW_MODE } = LIBRARY_CONSTANTS;
      const { currentViewMode, favoriteBookListDisplayed, chosenBookList } = getters;
      const sourceOfBooks = currentViewMode === FAVORITES_VIEW_MODE
        ? favoriteBookListDisplayed
        : chosenBookList;
      const pickedBook = getBookById({ sourceOfBooks, bookId });

      if (currentViewMode === SEARCH_VIEW_MODE) {
        const isBookFavorite = !!getBookById({ sourceOfBooks: getters.favoriteBookList, bookId });

        commit(mutationTypes.SET_CHOSEN_BOOK_INFO, {
          // mark the book at search mode as a favorite if so
          book: isBookFavorite ? { ...pickedBook, isInFavorite: true } : pickedBook,
        });
      } else {
        commit(mutationTypes.SET_CHOSEN_BOOK_INFO, { book: pickedBook });
      }
    } catch (e) {
      console.error(e, 'error while pickBook');
    } finally {
      // only for mobiles: say that now we can show book info
      if (rootGetters['ui/isSmallScreens']) {
        dispatch('changeChosenBookVisibility', { isBookPicked: true });
      }

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
  async fetchChosenBooksList({
    commit,
    getters,
    rootGetters,
    dispatch,
  }, {
    isLoadMore = false,
    isConcat = false,
    query = '',
    startIdx = 0,
  }) {
    try {
      // when search field onPressEnter use query from search field,
      // if clicked on the search tip uses saved query from the app state
      const querySource = query || getters.queryString;
      const booksPerPage = rootGetters['ui/isDesktopWidth']
        ? LIBRARY_CONSTANTS.BOOKS_PER_PAGE
        : LIBRARY_CONSTANTS.BOOKS_PER_PAGE_MOBILE;

      // only for mobiles: say that now we can't show list of books
      // because we have chosen book from tip list and have to show book screen
      await dispatch('handleSmallScreenBooks', { query, isConcat });

      if (querySource) {
        commit(mutationTypes.SET_LOADING_BOOKS_STATUS, { isBooksLoading: true });

        const { books, totalItems } = await fetchBooks({
          query: querySource,
          startIdx,
          maxResults: booksPerPage,
        }).then(mapSearchResults);

        await dispatch('handleLackOfBooks', { loadedBooks: books });

        if (!isLoadMore) {
          commit(mutationTypes.SET_CHOSEN_QUERY, { chosenQuery: querySource });
          commit(mutationTypes.SET_CHOSEN_TOTAL_ITEMS, { chosenTotalPages: totalItems });
        }

        if (!isConcat) {
          commit(mutationTypes.SET_CHOSEN_BOOK_LIST, { chosenBookList: books });
        } else {
          commit(mutationTypes.CONCAT_CHOSEN_BOOK_LIST, { chosenBookList: books });
        }
      }
    } catch (e) {
      console.error(e, 'error while fetchChosenBooksList');
    } finally {
      commit(mutationTypes.SET_LOADING_BOOKS_STATUS, { isBooksLoading: false });
    }
  },
  // part of fetchChosenBooksList action
  async handleSmallScreenBooks({ rootGetters, dispatch }, { query, isConcat }) {
    if (rootGetters['ui/isSmallScreens'] && !query && !isConcat) {
      await dispatch('changeBooksListVisibility', { isListVisible: false });
    }
  },
  // part of fetchChosenBooksList action
  handleLackOfBooks({ commit, getters }, { loadedBooks }) {
    if (!loadedBooks.length) {
      commit(mutationTypes.SET_NOTHING_FOUND_STATUS, { isNothingFound: true });
    }

    if (loadedBooks.length && getters.isNothingFound) {
      commit(mutationTypes.SET_NOTHING_FOUND_STATUS, { isNothingFound: false });
    }
  },
  changeBooksListVisibility({ commit }, { isListVisible }) {
    commit(mutationTypes.CHANGE_CHOSEN_BOOK_LIST_VISIBILITY, { isListVisible });
  },
  changeChosenBookVisibility({ commit }, { isBookPicked }) {
    commit(mutationTypes.CHANGE_CHOSEN_BOOK_VISIBILITY, { isBookPicked });
  },
  resetSearchTips({ commit }) {
    commit(mutationTypes.RESET_SEARCH_TIPS);
  },
};
