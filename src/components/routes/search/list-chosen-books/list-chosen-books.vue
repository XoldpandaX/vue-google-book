<template>
  <app-list
    class="list-chosen-books"
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
  },
};
</script>

<style scoped lang="scss">
  @import 'list-chosen-books';
</style>
