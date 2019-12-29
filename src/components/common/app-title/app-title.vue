<script>
export default {
  name: 'app-title',
  props: {
    level: {
      type: Number,
      required: true,
    },
    typeColor: {
      type: String,
    },
    customColor: {
      type: String,
      default: '',
    },
    customFontSize: {
      type: Number,
    },
  },
  render(h) {
    return h(
      `h${this.level}`,
      {
        class: {
          'app-title': true,
          'app-title--color-primary': this.typeColor === 'primary',
          'app-title--color-secondary': this.typeColor === 'secondary',
          'app-title--color-tertiary': this.typeColor === 'tertiary',
          'app-title--color-quaternary': this.typeColor === 'quaternary',
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
