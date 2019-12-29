<template>
  <section class="home-page">
<!--    <img-->
<!--      src="@/assets/png/logo.png"-->
<!--      alt="Vue logo"-->
<!--    >-->
<!--    <app-rating-->
<!--      :rating="3.8"-->
<!--    />-->
    <form-auth />
  </section>
</template>

<script>
import { FormAuth } from '../form-auth';

export default {
  name: 'home',
  components: {
    FormAuth,
  },
  data() {
    return {
      field: '',
    };
  },
  methods: {
    c() {
      console.info('hello');
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'home-page';
</style>
