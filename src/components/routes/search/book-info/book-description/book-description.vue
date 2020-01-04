<template>
  <div>
    <app-title
      type-color="primary"
      :level="1"
    >
      {{ description.title }}
    </app-title>
    <book-extra-info
      :authors="description.authors"
      :year="description.year"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppTitle } from '@/components/common/app-title';
import BookExtraInfo from './book-extra-info.vue';

export default {
  name: 'book-description',
  components: {
    AppTitle,
    BookExtraInfo,
  },
  props: {
    description: VueTypes.shape({
      title: VueTypes.string,
      rating: VueTypes.oneOfType([VueTypes.number, VueTypes.string]),
      authors: VueTypes.string,
      year: VueTypes.string,
    }).isRequired,
  },
};
</script>
