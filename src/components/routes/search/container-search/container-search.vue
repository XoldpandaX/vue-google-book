<template>
  <form
    :class="rootClasses"
    @submit.prevent="handleSubmit"
  >
    <input-search
      v-click-outside="resetSearchTips"
      :value="queryString"
      :is-active="isSearchTipsExist"
      :is-searching="isSearchPerforming"
      @search-input="debouncedHandleSearch"
      @cross-click="handleCrossClick"
      @down-press="handleDownPress"
      @up-press="handleUpPress"
    />
    <list-search-tips
      :search-tips="searchTips"
      @click-search-tip="handleSearchTipClick"
    />
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import debounce from 'lodash.debounce';

import { InputSearch } from '../input-search';
import { ListSearchTips } from '../list-search-tips';

export default {
  name: 'container-search',
  components: {
    InputSearch,
    ListSearchTips,
  },
  created() {
    this.debouncedHandleSearch = debounce(this.handleSearch, 250);
  },
  data() {
    return {
      isSearchTipsVisible: false,
    };
  },
  computed: {
    ...mapGetters('library', [
      'queryString',
      'searchTips',
      'isSearchPerforming',
      'isSearchTipsExist',
    ]),

    rootClasses() {
      const base = 'container-search';

      return [
        base,
        this.queryString && this.isSearchTipsExist
          ? `${base}--search-tips-active`
          : null,
      ];
    },
  },
  methods: {
    ...mapActions('library', [
      'performSearch',
      'resetQueryString',
      'resetSearchTips',
      'chooseBookById',
      'saveSearchResults',
    ]),
    async handleSearch(query) {
      if (query) {
        await this.performSearch({ query });
      } else {
        // remove tips results in case of saved tips when input is empty
        await this.resetSearchTips();
      }
    },
    async handleCrossClick() {
      await Promise.all([
        this.resetQueryString(),
        this.resetSearchTips(),
      ]);
    },
    async handleSearchTipClick(bookId) {
      await Promise.all([
        this.chooseBookById({ bookId }),
        this.saveSearchResults(),
        this.resetSearchTips(),
      ]);
    },
    async handleSubmit() {
      await Promise.all([
        this.saveSearchResults(),
        this.resetSearchTips(),
      ]);
    },
    handleDownPress() {
      console.info('press down');
    },
    handleUpPress() {
      console.info('press up');
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'container-search';
</style>
