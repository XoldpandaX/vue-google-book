<template>
  <form>
    <input type="text" />
    <button-with-loader @button-click="c">
      Sign Up
    </button-with-loader>
    <button-with-loader
      :is-enable="false"
      @button-click="c"
    >
      Sign In
    </button-with-loader>
  </form>
</template>

<script>
import { ButtonWithLoader } from '@/components/common/button-with-loader';

export default {
  name: 'form-auth',
  components: {
    ButtonWithLoader,
  },
  methods: {
    c() {
      console.info('clicked');
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'form-auth';
</style>
