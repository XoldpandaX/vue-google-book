<template>
  <div>
    <div
      v-for="i in pulseDotsQuantity"
      :key="i"
      :class="getLoaderClasses(i)"
      :style="getLoaderInnerStyles(i)"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'loader-pulse',
  props: {
    color: VueTypes.string.def('#5dc596'),
    size: VueTypes.string.def('15px'),
    margin: VueTypes.string.def('2px'),
    pulseDotsQuantity: VueTypes.number.def(3),
  },
  computed: {
    spinnerStyle() {
      return {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
      };
    },
    spinnersDelay() {
      const step = 0.12;

      return [...new Array(this.pulseDotsQuantity)].reduce((acc, next, idx) => {
        const elementNum = idx + 1;

        return {
          ...acc,
          [`spinnerDelay${elementNum}`]: {
            animationDelay: elementNum === 1
              ? `${step}s`
              : `${step * elementNum}s`,
          },
        };
      }, {});
    },
  },
  methods: {
    getLoaderClasses(idx) {
      return `loader-pulse v-pulse${idx + 1}`;
    },
    getLoaderInnerStyles(idx) {
      return [
        this.spinnerStyle,
        this.spinnersDelay[`spinnerDelay${idx}`],
      ];
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'loader-pulse';
</style>
