<template>
  <button
    :class="rootClasses"
    @click="emitEvent"
  >
    <slot />
  </button>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-button',
  props: {
    type: VueTypes.oneOf(['primary', 'secondary', 'with-icon']).isRequired,
    size: VueTypes.oneOf(['small', 'medium']).def('small'),
    isEnable: VueTypes.bool.def(true),
  },
  computed: {
    rootClasses() {
      const base = 'app-button';

      if (this.type === 'with-icon') {
        return [base, `${base}--${this.type}`];
      }

      return [
        base,
        this.isEnable ? '' : `${base}--disable`,
        ...[
          this.type,
          this.size,
        ].reduce((acc, val) => [...acc, `${base}--${val}`], []),
      ];
    },
  },
  methods: {
    emitEvent() {
      if (this.isEnable) {
        this.$emit('button-click');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-button';
</style>
