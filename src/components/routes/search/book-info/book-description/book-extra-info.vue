<template>
  <div class="book-info__main-extra">
    <book-extra-text info-color="additional">
      <template v-slot:title>Authors:</template>
      <template v-slot:info>{{ authors || ' authors unknown' }}</template>
    </book-extra-text>
    <book-extra-text>
      <template v-slot:title>Year:</template>
      <template v-slot:info>{{ year || ' year unknown' }}</template>
    </book-extra-text>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import BookExtraText from '../book-extra-text.vue';

export default {
  name: 'book-extra-info',
  components: {
    BookExtraText,
  },
  props: {
    authors: VueTypes.string.isRequired,
    year: VueTypes.string.isRequired,
  },
};
</script>
