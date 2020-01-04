<template>
  <div class="app-image">
    <img
      :width="size.width"
      :height="size.height"
      :alt="alt"
      :src="src"
    >
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-image',
  props: {
    src: VueTypes.string.isRequired,
    alt: VueTypes.string.isRequired,
    size: VueTypes.shape({
      width: VueTypes.number,
      height: VueTypes.number,
    }).def(() => ({ width: 177, height: 242 })),
  },
};
</script>

<style scoped lang="scss">
  @import 'app-image';
</style>
