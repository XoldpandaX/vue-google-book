<template>
  <wrapper-template
    class="wrapper-mobile"
    :size="{ width: '100%', height: '' }"
    :background-image="backgroundImg"
  >
    <div class="wrapper-mobile__action-row">
      <template v-if="isSearchMode">
        <container-favorites-button />
        <container-search />
      </template>
    </div>
    <template v-if="isBookListAvailable">
      <container-list-chosen-books />
    </template>
  </wrapper-template>
</template>

<script>
import VueTypes from 'vue-types';
import backgroundImage from '@/assets/svg/background.svg';
import { LIBRARY_CONSTANTS } from '@/constants';

import { ContainerFavoritesButton } from '../container-favorites-button';
import { ContainerListChosenBooks } from '../container-list-chosen-books';
import { ContainerSearch } from '../container-search';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'mobile-wrapper-search',
  components: {
    ContainerSearch,
    ContainerListChosenBooks,
    ContainerFavoritesButton,
    WrapperTemplate,
  },
  props: {
    hasBackgroundImg: VueTypes.bool.def(false),
    isBookListAvailable: VueTypes.bool.def(true),
    currentViewMode: VueTypes.oneOf([
      LIBRARY_CONSTANTS.SEARCH_VIEW_MODE,
      LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE,
    ]).def(LIBRARY_CONSTANTS.SEARCH_VIEW_MODE),
  },
  computed: {
    backgroundImg() {
      return this.hasBackgroundImg ? backgroundImage : '';
    },
    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'mobile-wrapper-search';
</style>
