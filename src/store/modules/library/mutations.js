import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_QUERY_STRING](state, { query }) {
    state.query = query;
  },
  [mutationTypes.RESET_QUERY_STRING](state) {
    state.query = '';
  },
  [mutationTypes.SET_SEARCH_ITEMS_QUANTITY](state, { totalItems }) {
    state.totalSearchedItems = totalItems;
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
  [mutationTypes.SET_CHOSEN_TOTAL_ITEMS](state, { chosenTotalItems }) {
    state.chosenTotalItems = chosenTotalItems;
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
};
