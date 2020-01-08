<template>
  <app-list
    ref="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-distance="300"
    :class="rootClasses"
    v-slot="{ item }"
    :list-items="books"
  >
    <list-element
      :item="item"
      :is-desktop-width="isDesktopWidth"
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
    isDesktopWidth: VueTypes.bool.isRequired,
  },
  data() {
    return {
      busy: false,
    };
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
  methods: {
    loadMore() {
      if (this.books.length && !this.isDesktopWidth) {
        this.busy = true;

        if (!this.isBooksLoading) {
          this.busy = false;
          this.$emit('list-scroll');
        } else {
          this.busy = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'list-chosen-books';
</style>
