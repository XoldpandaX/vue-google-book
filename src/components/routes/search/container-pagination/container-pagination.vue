<template>
  <app-pagination
    v-if="isPaginationAvailable"
    :items="fakeArr"
    :is-button-available="!isBooksLoading"
    @change-page="handleChange"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LIBRARY_CONSTANTS } from '@/constants';

import { AppPagination } from '@/components/common/app-pagination';

export default {
  name: 'container-pagination',
  components: {
    AppPagination,
  },
  computed: {
    ...mapGetters('library', [
      'chosenBookList',
      'isNothingFound',
      'chosenTotalPages',
      'favoriteTotalPages',
      'isBooksLoading',
      'currentViewMode',
    ]),
    ...mapGetters('ui', ['isDesktopWidth']),

    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
    sourceOfPagesQuantity() {
      return this.isSearchMode ? this.chosenTotalPages : this.favoriteTotalPages;
    },
    fakeArr() {
      return [...Array(this.sourceOfPagesQuantity).keys()].map((i) => i);
    },
    isPaginationAvailable() {
      return !this.isNothingFound && this.sourceOfPagesQuantity && this.isDesktopWidth;
    },
  },
  methods: {
    ...mapActions('library', ['fetchChosenBooksList', 'setDisplayedFavoriteBooks']),

    async handleChange(pageNum) {
      // index from which google book API or our saved favorite arr data return books to us
      const { BOOKS_PER_PAGE } = LIBRARY_CONSTANTS;
      const startIdx = pageNum > 1
        ? (BOOKS_PER_PAGE * pageNum) - BOOKS_PER_PAGE + 1 // num of next item after max
        : 0;

      if (this.isSearchMode) {
        await this.fetchChosenBooksList({
          isLoadMore: true,
          startIdx,
        });
      } else {
        await this.setDisplayedFavoriteBooks({ startIdx });
      }
    },
  },
};
</script>
