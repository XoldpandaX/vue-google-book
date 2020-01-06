<template>
  <wrapper-template
    class="wrapper-main"
    :size="{ width: '46%', height: '100%' }"
  >
    <div class="wrapper-main__row">
      <container-favorites-button />
      <container-search v-if="isSearchMode" />
      <app-title
        v-else
        :level="1"
      >
        Favorites
      </app-title>
    </div>
    <container-list-chosen-books />
    <container-pagination />
    <loader-clip
      v-if="isBooksLoading"
      class="wrapper-main__loader"
      size="36px"
    />
  </wrapper-template>
</template>

<script>
import VueTypes from 'vue-types';
import { LIBRARY_CONSTANTS } from '@/constants';

import { AppTitle } from '@/components/common/app-title';
import { ContainerFavoritesButton } from '../container-favorites-button';
import { ContainerListChosenBooks } from '../container-list-chosen-books';
import { ContainerPagination } from '../container-pagination';
import { ContainerSearch } from '../container-search';
import { LoaderClip } from '@/components/common/loader-clip';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'wrapper-main',
  components: {
    AppTitle,
    ContainerFavoritesButton,
    ContainerListChosenBooks,
    ContainerPagination,
    ContainerSearch,
    LoaderClip,
    WrapperTemplate,
  },
  props: {
    isBooksLoading: VueTypes.bool.def(false),
    viewMode: VueTypes.oneOf([
      LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE,
      LIBRARY_CONSTANTS.SEARCH_VIEW_MODE,
    ]).isRequired,
  },
  computed: {
    isSearchMode() {
      return this.viewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'wrapper-main';
</style>
