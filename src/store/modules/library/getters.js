export default {
  queryString: ({ query }) => query,
  searchTips: ({ searchTips }) => searchTips,
  isSearchTipsExist: (state, { searchTips }) => searchTips.length > 0,
  isSearchPerforming: ({ isInProcess }) => isInProcess,
};
