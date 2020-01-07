import { LIBRARY_CONSTANTS } from '@/constants';

export default {
  query: '',
  favoriteBookList: [], // favorite books selected by user
  favoriteBookListDisplayed: [], // favorite books displayed on certain page
  favoriteTotalPages: 0, // total quantity of books selected by user
  searchTips: [],
  chosenQuery: '', // query for fetch next books page(pagination)
  chosenBookList: [], // a list of books found when you select a particular book
  chosenBookInfo: {}, // chosen book for displaying (favorite and from search)
  chosenTotalPages: 0, // chosenBookList entities that can be downloaded in future
  currentViewMode: LIBRARY_CONSTANTS.SEARCH_VIEW_MODE, // display mode(search or favorites of user)
  isTipsLoading: false,
  isBookInfoLoading: false,
  isBooksLoading: false,
  isNothingFound: false,

  isBookWasChosen: false, // only for mobile devices: to know does click on the book was performed
  isBookListAvailable: true, // only for mobile devices: to know does it needs to hide chosen books list
};
