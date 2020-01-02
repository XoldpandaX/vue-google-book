<template>
  <input
    class="app-input"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :style="customWidth"
    @input="$emit('input', $event.target.value)"
    @keydown.down="handleArrowBtnPress"
    @keydown.up="handleArrowBtnPress"
  >
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-input',
  props: {
    value: VueTypes.string.isRequired,
    type: VueTypes.string.def('text'),
    placeholder: VueTypes.string.def(''),
    width: VueTypes.string.def(''),
    customType: VueTypes.oneOf(['search', '']).def(''),
  },
  computed: {
    customWidth() {
      return {
        width: this.width,
        maxWidth: '100%',
      };
    },
  },
  methods: {
    handleArrowBtnPress(e) {
      if (this.customType === 'search') {
        const { code } = e;
        const eventsByKeyCode = {
          ArrowDown: 'press-key-down',
          ArrowUp: 'press-key-up',
        };

        e.preventDefault();
        this.$emit(eventsByKeyCode[code], { key: code });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-input';
</style>
