<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-title',
  props: {
    level: VueTypes.number.isRequired,
    typeColor: VueTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
    customColor: VueTypes.string.def(''),
    customFontSize: VueTypes.number,
  },
  render(h) {
    return h(
      `h${this.level}`,
      {
        class: {
          'app-title': true,
          [`app-title--color-${this.typeColor}`]: true,
        },
        style: {
          color: !this.typeColor && this.customColor ? this.customColor : '',
          fontSize: this.customFontSize && `${this.customFontSize}px`,
        },
      },
      this.$slots.default,
    );
  },
};
</script>

<style scoped lang="scss">
  @import 'app-title';
</style>
