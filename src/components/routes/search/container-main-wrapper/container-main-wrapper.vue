<template>
  <wrapper-main :is-books-loading="isBooksLoading" />
</template>

<script>
import { mapGetters } from 'vuex';

import { WrapperMain } from '../wrapper-main';

export default {
  name: 'container-main-wrapper',
  components: {
    WrapperMain,
  },
  computed: {
    ...mapGetters('library', ['isBooksLoading']),
  },
};
</script>
