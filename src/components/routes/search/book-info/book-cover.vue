<template>
  <div class="book-cover">
    <img
      width="177"
      height="242"
      alt="book cover"
      :src="source"
    >
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'book-cover',
  props: {
    source: VueTypes.string.isRequired,
  },
};
</script>
