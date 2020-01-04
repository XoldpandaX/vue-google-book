<template>
  <list-chosen-books
    v-if="!isNothingFound"
    :books="chosenBookList"
    @list-el-click="handleItemClick"
  />
  <div v-else>nothing found for your search...</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { ListChosenBooks } from '../list-chosen-books';

export default {
  name: 'container-list-chosen-books',
  components: {
    ListChosenBooks,
  },
  computed: {
    ...mapGetters('library', ['chosenBookList', 'isNothingFound']),
  },
  methods: {
    ...mapActions('library', ['pickBook']),

    async handleItemClick(bookId) {
      await this.pickBook({ bookId });
    },
  },
};
</script>
