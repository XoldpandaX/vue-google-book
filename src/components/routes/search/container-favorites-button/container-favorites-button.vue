<template>
  <button-favorites
    :view-mode="currentViewMode"
    @button-favorite-click="handleClick"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { LIBRARY_CONSTANTS } from '@/constants';

import { ButtonFavorites } from '../button-favorites';

export default {
  name: 'container-favorites-button',
  components: {
    ButtonFavorites,
  },
  computed: {
    ...mapGetters('library', ['currentViewMode']),
  },
  methods: {
    ...mapActions('library', ['changeViewMode']),

    async handleClick() {
      await this.changeViewMode({
        viewMode: (
          this.currentViewMode === LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE
            ? LIBRARY_CONSTANTS.SEARCH_VIEW_MODE
            : LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE
        ),
      });
    },
  },
};
</script>
