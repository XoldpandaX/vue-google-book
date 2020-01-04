<template>
  <wrapper-template
    class="wrapper-main"
    :size="{ width: '46%', height: '100%' }"
  >
    <div class="wrapper-main__row">
      <container-favorites />
      <container-search />
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

import { ContainerFavorites } from '../container-favorites';
import { ContainerListChosenBooks } from '../container-list-chosen-books';
import { ContainerPagination } from '../container-pagination';
import { ContainerSearch } from '../container-search';
import { LoaderClip } from '@/components/common/loader-clip';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'wrapper-main',
  components: {
    ContainerFavorites,
    ContainerListChosenBooks,
    ContainerPagination,
    ContainerSearch,
    LoaderClip,
    WrapperTemplate,
  },
  props: {
    isBooksLoading: VueTypes.bool.def(false),
  },
};
</script>

<style scoped lang="scss">
  @import 'wrapper-main';
</style>
