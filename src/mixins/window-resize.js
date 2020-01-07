import throttle from 'lodash.throttle';

export default {
  created() {
    this.throttledGetWindowSizes = throttle(this.getWindowSizes, 600);
  },
  data() {
    return {
      mix_windowHeight: 0,
      mix_windowWidth: 0,
    };
  },
  methods: {
    getWindowSizes() {
      this.mix_windowHeight = window.innerHeight;
      this.mix_windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.throttledGetWindowSizes);
      this.getWindowSizes();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledGetWindowSizes);
  },
};
