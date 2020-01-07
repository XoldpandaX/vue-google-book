<template>
  <mobile-wrapper-search
    :has-background-img="!isBookListsExists"
    :is-book-list-available="isBookListAvailable"
    :current-view-mode="currentViewMode"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import { MobileWrapperSearch } from '../mobile-wrapper-search';

export default {
  name: 'container-mobile-wrapper-search',
  components: {
    MobileWrapperSearch,
  },
  computed: {
    ...mapGetters('library', [
      'chosenBookList',
      'favoriteBookListDisplayed',
      'currentViewMode',
      'isBookListAvailable',
    ]),

    isBookListsExists() {
      return this.favoriteBookListDisplayed.length || this.chosenBookList.length;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'container-mobile-wrapper-search';
</style>
