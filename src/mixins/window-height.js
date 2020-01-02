export default {
  data() {
    return {
      mix_windowHeight: 0,
    };
  },
  methods: {
    getWindowHeight() {
      this.mix_windowHeight = window.innerHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowHeight();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowHeight);
  },
};
