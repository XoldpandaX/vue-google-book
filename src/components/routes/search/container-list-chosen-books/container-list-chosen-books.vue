<template>
  <list-chosen-books
    v-if="!isNothingFound"
    :books="sourceOfBookList"
    :is-books-loading="isBooksLoading"
    :is-desktop-width="isDesktopWidth"
    @list-el-click="handleItemClick"
    @list-scroll="handleScroll"
  /> <!-- SCROLL event will emit ONLY on mobile devices -->
  <app-text v-else>'nothing found for your search...'</app-text>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LIBRARY_CONSTANTS } from '@/constants';

import { AppText } from '@/components/common/app-text';
import { ListChosenBooks } from '../list-chosen-books';

export default {
  name: 'container-list-chosen-books',
  components: {
    AppText,
    ListChosenBooks,
  },
  computed: {
    ...mapGetters('library', [
      'chosenBookList',
      'favoriteBookListDisplayed',
      'isNothingFound',
      'isBooksLoading',
      'currentViewMode',
    ]),
    ...mapGetters('ui', ['isDesktopWidth']),

    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
    sourceOfBookList() {
      return this.isSearchMode ? this.chosenBookList : this.favoriteBookListDisplayed;
    },
  },
  methods: {
    ...mapActions('library', [
      'pickBook',
      'fetchChosenBooksList',
      'mobileSetDisplayedFavoriteBooks',
    ]),

    async handleItemClick(bookId) {
      await this.pickBook({ bookId });
    },
    async handleScroll() {
      if (this.isSearchMode) {
        await this.fetchChosenBooksList({
          isLoadMore: true,
          isConcat: true,
          startIdx: this.chosenBookList.length + 1,
        });
      } else {
        await this.mobileSetDisplayedFavoriteBooks({
          startIdx: this.favoriteBookListDisplayed.length + 1,
        });
      }
    },
  },
};
</script>
