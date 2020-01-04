<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-title',
  props: {
    level: VueTypes.number.isRequired,
    typeColor: VueTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary'])
      .def('primary'),
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
          fontSize: this.customFontSize ? `${this.customFontSize}px` : null,
        },
      },
      this.$slots.default,
    );
  },
};
</script>

<style lang="scss">
  @import 'app-title';
</style>
