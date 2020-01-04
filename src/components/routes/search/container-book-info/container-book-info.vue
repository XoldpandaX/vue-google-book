<template>
  <book-info
    :book="chosenBook"
    :is-book-loading="isBookInfoLoading"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import { BookInfo } from '../book-info';

export default {
  name: 'container-book-info',
  components: {
    BookInfo,
  },
  computed: {
    ...mapGetters('library', ['chosenBook', 'isBookInfoLoading']),
  },
};
</script>
