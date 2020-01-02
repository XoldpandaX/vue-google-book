<template>
  <button-favorites
    class="button-favorites"
    @button-favorite-click="c"
  />
</template>

<script>
import { ButtonFavorites } from '../button-favorites';

export default {
  name: 'container-favorites',
  components: {
    ButtonFavorites,
  },
  methods: {
    c() {
      console.info('sdfsfsdf');
    },
  },
};
</script>
