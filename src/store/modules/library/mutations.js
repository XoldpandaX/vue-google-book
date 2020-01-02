import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_QUERY_STRING](state, { query }) {
    state.query = query;
  },
  [mutationTypes.RESET_QUERY_STRING](state) {
    state.query = '';
  },
  [mutationTypes.SET_BOOK_LIST](state, { books }) {
    state.booksList = books;
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
  [mutationTypes.SET_PROCESS_STATUS](state, { isInProcess }) {
    state.isInProcess = isInProcess;
  },
};
