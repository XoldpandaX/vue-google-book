<template>
  <wrapper-main
    :is-books-loading="isBooksLoading"
    :view-mode="currentViewMode"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import { WrapperMain } from '../wrapper-main';

export default {
  name: 'container-wrapper-main',
  components: {
    WrapperMain,
  },
  computed: {
    ...mapGetters('library', ['isBooksLoading', 'currentViewMode']),
  },
};
</script>
