export default {
  query: '',
  favoriteBooks: [],
  searchTips: [],
  chosenQuery: '', // query for fetch next books page(pagination)
  chosenBookList: [], // a list of books found when you select a particular book
  chosenBookInfo: {}, // chosen book for displaying
  chosenTotalItems: 0, // chosenBookList entities that can be downloaded in future
  isInProcess: false,
  isNothingFound: false,
};
