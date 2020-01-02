export default {
  queryString: ({ query }) => query,
  searchTips: ({ searchTips }) => searchTips,
  booksList: ({ booksList }) => booksList,
  isSearchTipsExist: (state, { searchTips }) => searchTips.length > 0,
  isSearchPerforming: ({ isInProcess }) => isInProcess,
};
