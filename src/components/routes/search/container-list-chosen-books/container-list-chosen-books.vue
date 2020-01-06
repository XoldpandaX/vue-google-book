<template>
  <list-chosen-books
    v-if="!isNothingFound"
    :books="sourceOfBookList"
    :is-books-loading="isBooksLoading"
    @list-el-click="handleItemClick"
  />
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

    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
    sourceOfBookList() {
      return this.isSearchMode ? this.chosenBookList : this.favoriteBookListDisplayed;
    },
  },
  methods: {
    ...mapActions('library', ['pickBook']),

    async handleItemClick(bookId) {
      await this.pickBook({ bookId });
    },
  },
};
</script>
