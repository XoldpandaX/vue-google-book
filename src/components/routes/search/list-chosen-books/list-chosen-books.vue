<template>
  <app-list
    :class="rootClasses"
    v-slot="{ item }"
    :list-items="books"
  >
    <list-element
      :item="item"
      @list-el-click="$emit('list-el-click', $event)"
    />
  </app-list>
</template>

<script>
import VueTypes from 'vue-types';

import { AppList } from '@/components/common/app-list';
import ListElement from './list-element.vue';

export default {
  name: 'list-chosen-books',
  components: {
    AppList,
    ListElement,
  },
  props: {
    books: VueTypes.arrayOf(VueTypes.object),
    isBooksLoading: VueTypes.bool.def(false),
  },
  computed: {
    rootClasses() {
      const base = 'list-chosen-books';

      return [
        base,
        this.isBooksLoading ? `${base}--loading` : null,
      ];
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'list-chosen-books';
</style>
