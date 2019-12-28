<template>
  <input
    :class="rootClasses"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-input',
  props: {
    classNames: VueTypes.arrayOf(VueTypes.string).def(['']),
    type: VueTypes.string.def('text'),
    placeholder: VueTypes.string.def(''),
  },
  computed: {
    rootClasses() {
      return ['app-input', ...this.classNames];
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-input';
</style>
