<template>
  <div :style="styles">
    <slot />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'wrapper-template',
  props: {
    size: VueTypes.shape({
      width: VueTypes.string,
      height: VueTypes.string,
    }).isRequired,
    backgroundColor: VueTypes.string.def('#FFF'),
    backgroundImage: VueTypes.string.def(''),
  },
  computed: {
    styles() {
      const { size, backgroundImage, ...rest } = this.$props;

      return {
        ...rest,
        width: size.width,
        height: size.height,
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      };
    },
  },
};
</script>
