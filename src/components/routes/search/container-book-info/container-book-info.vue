<template>
  <book-info
    :book="chosenBook"
    :is-book-loading="isBookInfoLoading"
    :current-view-mode="currentViewMode"
    @add-to-favorite="handleAddToFavorite"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LIBRARY_CONSTANTS } from '@/constants';

import { BookInfo } from '../book-info';

export default {
  name: 'container-book-info',
  components: {
    BookInfo,
  },
  computed: {
    ...mapGetters('library', [
      'chosenBook',
      'isBookInfoLoading',
      'currentViewMode',
    ]),

    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
  },
  methods: {
    ...mapActions('library', ['addBookToFavorite']),

    async handleAddToFavorite() {
      await this.addBookToFavorite({ selectedBook: this.chosenBook });
    },
  },
};
</script>
