<template>
  <section class="search-page">
    <h1>This is an about page</h1>
    <button @click="f">sign out</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { ROUTES } from '@/constants';

export default {
  name: 'search-page',
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
