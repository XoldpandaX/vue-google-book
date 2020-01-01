<template>
  <section class="home-page">
    <container-form-auth />
  </section>
</template>

<script>
import { ContainerFormAuth } from '../container-form-auth';

export default {
  name: 'home',
  components: {
    ContainerFormAuth,
  },
};
</script>

<style scoped lang="scss">
  @import 'home-page';
</style>
