<template>
  <div class="book-rating">
    <app-rating :rating="rating" />
    <book-extra-text>
      <template v-slot:title>Rating: </template>
      <template v-slot:info>{{ rating }}</template>
    </book-extra-text>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppRating } from '@/components/common/app-rating';
import BookExtraText from './book-extra-text.vue';

export default {
  name: 'book-rating',
  components: {
    AppRating,
    BookExtraText,
  },
  props: {
    rating: VueTypes.number.isRequired,
  },
};
</script>
