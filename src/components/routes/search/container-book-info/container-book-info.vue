<template>
  <book-info :book="chosenBook" />
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
    ...mapGetters('library', ['chosenBook']),
  },
};
</script>
