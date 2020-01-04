export default {
  queryString: ({ query }) => query,
  searchTips: ({ searchTips }) => searchTips,
  booksList: ({ booksList }) => booksList,
  totalSearchedItems: ({ totalSearchedItems }) => totalSearchedItems,
  chosenBookList: ({ chosenBookList }) => chosenBookList,
  chosenBook: ({ chosenBookInfo }) => chosenBookInfo,
  isSearchTipsExist: (state, { searchTips }) => searchTips.length > 0,
  isSearchPerforming: ({ isInProcess }) => isInProcess,
  isNothingFound: ({ isNothingFound }) => isNothingFound,
};
