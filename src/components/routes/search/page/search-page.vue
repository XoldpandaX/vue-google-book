<template>
  <section :class="rootClasses">
    <div class="search-page__wrapper">
<!--      <button @click="f">sign out</button>-->
      <container-book-info />
      <wrapper-main />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { mixinWindowHeight } from '@/mixins';
import { ROUTES } from '@/constants';

import { ContainerBookInfo } from '../container-book-info';
import { WrapperMain } from '../wrapper-main';

export default {
  name: 'search-page',
  components: {
    ContainerBookInfo,
    WrapperMain,
  },
  mixins: [mixinWindowHeight],
  computed: {
    rootClasses() {
      return ['search-page', this.pagePositionClass];
    },
    pagePositionClass() {
      return `search-page--${this.mix_windowHeight < 900 ? 'indent-pos' : 'center-pos'}`;
    },
  },
  methods: {
    ...mapActions('auth', ['signOut']),

    async f() {
      await this.signOut();
      await this.$router.push({ name: ROUTES.HOME.NAME });
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'search-page';
</style>
