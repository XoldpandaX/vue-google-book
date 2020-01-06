import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_QUERY_STRING](state, { query }) {
    state.query = query;
  },
  [mutationTypes.RESET_QUERY_STRING](state) {
    state.query = '';
  },
  [mutationTypes.SET_SEARCH_ITEMS_QUANTITY](state, { totalItems }) {
    state.chosenTotalPages = totalItems;
  },
  [mutationTypes.SET_SEARCH_TIPS](state, { tips }) {
    state.searchTips = tips;
  },
  [mutationTypes.RESET_SEARCH_TIPS](state) {
    state.searchTips = [];
  },
  [mutationTypes.SET_CHOSEN_BOOK_INFO](state, { book }) {
    state.chosenBookInfo = book;
  },
  [mutationTypes.SET_CHOSEN_BOOK_LIST](state, { chosenBookList }) {
    state.chosenBookList = chosenBookList;
  },
  [mutationTypes.SET_CHOSEN_TOTAL_ITEMS](state, { chosenTotalPages }) {
    state.chosenTotalPages = chosenTotalPages;
  },
  [mutationTypes.SET_CHOSEN_QUERY](state, { chosenQuery }) {
    state.chosenQuery = chosenQuery;
  },
  [mutationTypes.SET_LOADING_TIPS_STATUS](state, { isTipsLoading }) {
    state.isTipsLoading = isTipsLoading;
  },
  [mutationTypes.SET_LOADING_BOOKS_STATUS](state, { isBooksLoading }) {
    state.isBooksLoading = isBooksLoading;
  },
  [mutationTypes.SET_LOADING_BOOK_INFO_STATUS](state, { isBookInfoLoading }) {
    state.isBookInfoLoading = isBookInfoLoading;
  },
  [mutationTypes.SET_NOTHING_FOUND_STATUS](state, { isNothingFound }) {
    state.isNothingFound = isNothingFound;
  },
  [mutationTypes.SET_VIEW_MODE](state, { viewMode }) {
    state.currentViewMode = viewMode;
  },
  [mutationTypes.RESET_CHOSEN_BOOK_INFO](state) {
    state.chosenBookInfo = {};
  },
  // favorite books
  [mutationTypes.SET_FAVORITE_BOOK_LIST](state, { favoriteBookList }) {
    state.favoriteBookList = favoriteBookList;
  },
  [mutationTypes.SET_FAVORITE_BOOK_LIST_DISPLAYED](state, { displayedBooks }) {
    state.favoriteBookListDisplayed = displayedBooks;
  },
  [mutationTypes.UPDATE_FAVORITE_BOOK_LIST](state, { selectedBook }) {
    state.favoriteBookList = [
      selectedBook,
      ...state.favoriteBookList,
    ];
  },
  [mutationTypes.SET_FAVORITE_TOTAL_PAGES](state, { favoriteTotalPages }) {
    state.favoriteTotalPages = favoriteTotalPages;
  },
};
