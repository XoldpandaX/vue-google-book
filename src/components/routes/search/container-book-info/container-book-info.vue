<template>
  <book-info
    :book="chosenBook"
    :is-book-loading="isBookInfoLoading"
    :current-view-mode="currentViewMode"
    :is-small-screens="isSmallScreens"
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
    ...mapGetters('ui', ['isSmallScreens']),

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
