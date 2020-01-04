<template>
  <p
    v-if="!isInline"
    :class="rootClasses"
  >
    <slot />
  </p>
  <span
    v-else
    :class="rootClasses"
  >
    <slot />
  </span>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-text',
  props: {
    sizeType: VueTypes.oneOf(['primary', 'secondary', 'tertiary']).def('primary'),
    colorType: VueTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'additional',
    ]).def('primary'),
    lineHeightType: VueTypes.oneOf(['primary', 'secondary', 'tertiary'])
      .def('primary'),
    isInline: VueTypes.bool.def(false),
  },
  computed: {
    rootClasses() {
      return [
        this.baseClass,
        this.fontSizeClass,
        this.fontColorClass,
        this.lineHeightClass,
      ];
    },
    baseClass() {
      return 'app-text';
    },
    fontSizeClass() {
      return `${this.baseClass}--size-${this.sizeType}`;
    },
    fontColorClass() {
      return `${this.baseClass}--color-${this.colorType}`;
    },
    lineHeightClass() {
      return `${this.baseClass}--line-height-${this.lineHeightType}`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-text';
</style>
