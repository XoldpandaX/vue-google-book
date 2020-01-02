<template>
  <div
    class="loader-clip"
    :style="styles"
  />
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'loader-clip',
  props: {
    color: VueTypes.string.def('#F5A623'),
    size: VueTypes.string.def('35px'),
  },
  computed: {
    styles() {
      return {
        height: this.size,
        width: this.size,
        borderColor: `${this.color} ${this.color} transparent`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'loader-clip';
</style>
