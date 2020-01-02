<template>
  <wrapper-template
    class="wrapper-main"
    :size="{ width: '50%', height: '100%' }"
  >
    <div class="wrapper-main__row">
      <container-favorites />
      <container-search />
    </div>
  </wrapper-template>
</template>

<script>
import { ContainerFavorites } from '../container-favorites';
import { ContainerSearch } from '../container-search';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'wrapper-main',
  components: {
    ContainerFavorites,
    ContainerSearch,
    WrapperTemplate,
  },
};
</script>

<style scoped lang="scss">
  @import 'wrapper-main';
</style>
