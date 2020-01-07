<template>
  <mobile-header
    :authors="chosenBook.authors"
    :header-type="headerType"
    @back-btn-click="handleClick"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LIBRARY_CONSTANTS } from '@/constants';

import { MobileHeader } from '../mobile-header';

export default {
  name: 'container-mobile-header',
  components: {
    MobileHeader,
  },
  computed: {
    ...mapGetters('library', [
      'chosenBook',
      'currentViewMode',
      'isBookWasChosen',
    ]),

    headerType() {
      return (
        this.currentViewMode === LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE && !this.isBookWasChosen
          ? 'favorites'
          : 'book'
      );
    },
  },
  methods: {
    ...mapActions('library', [
      'changeBooksListVisibility',
      'changeChosenBookVisibility',
      'changeViewMode',
    ]),

    async handleClick() {
      if (this.headerType === 'book') {
        await this.changeChosenBookVisibility({ isBookPicked: false });
        await this.changeBooksListVisibility({ isListVisible: true });
      } else {
        await this.changeViewMode({ viewMode: LIBRARY_CONSTANTS.SEARCH_VIEW_MODE });
      }
    },
  },
};
</script>
