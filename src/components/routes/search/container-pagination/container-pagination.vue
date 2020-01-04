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
      'totalSearchedItems',
      'isBooksLoading',
    ]),

    fakeArr() {
      return [...Array(this.totalSearchedItems).keys()].map((i) => i);
    },
    isPaginationAvailable() {
      return !this.isNothingFound && this.chosenBookList.length;
    },
  },
  methods: {
    ...mapActions('library', ['fetchChosenBooksList']),

    async handleChange(pageNum) {
      // index from which google book API return books to us
      const startIdx = LIBRARY_CONSTANTS.BOOKS_PER_PAGE * pageNum;

      await this.fetchChosenBooksList({
        isLoadMore: true,
        startIdx,
      });
    },
  },
};
</script>
