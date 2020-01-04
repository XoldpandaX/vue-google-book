export default {
  queryString: ({ query }) => query,
  searchTips: ({ searchTips }) => searchTips,
  totalSearchedItems: ({ chosenTotalItems }) => chosenTotalItems,
  chosenBookList: ({ chosenBookList }) => chosenBookList,
  chosenBook: ({ chosenBookInfo }) => chosenBookInfo,
  isSearchTipsExist: (state, { searchTips }) => searchTips.length > 0,
  isTipsLoading: ({ isTipsLoading }) => isTipsLoading,
  isBooksLoading: ({ isBooksLoading }) => isBooksLoading,
  isBookInfoLoading: ({ isBookInfoLoading }) => isBookInfoLoading,
  isNothingFound: ({ isNothingFound }) => isNothingFound,
};
