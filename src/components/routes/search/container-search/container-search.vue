<template>
  <div class="container-search">
    <input-search
      v-click-outside="resetSearchTips"
      :value="queryString"
      :is-active="isSearchTipsAvailable"
      :is-searching="isSearchPerforming"
      @search-input="debouncedHandleSearch"
      @search-focus="handleOnFocus"
      @cross-click="handleCrossClick"
      @enter-press="handleSubmit"
      @down-press="handleDownPress"
      @up-press="handleUpPress"
    />
    <list-search-tips
      v-if="isSearchTipsAvailable"
      :search-tips="searchTips"
      @click-search-tip="handleSearchTipClick"
    />
  </div>
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
      isTipsVisible: false,
    };
  },
  computed: {
    ...mapGetters('library', [
      'queryString',
      'searchTips',
      'isSearchPerforming',
      'isSearchTipsExist',
    ]),

    isSearchTipsAvailable() {
      return this.isTipsVisible && this.searchTips.length > 0;
    },
  },
  methods: {
    ...mapActions('library', [
      'fetchSearchTips',
      'resetQueryString',
      'resetSearchTips',
      'pickBookFromSearchTips',
      'fetchChosenBooksList',
    ]),

    async handleSearch(query) {
      if (query) {
        await this.fetchSearchTips({ query });
      } else {
        // remove tips results in case of saved tips when input is empty
        await this.resetSearchTips();
      }
    },
    async handleOnFocus(query) {
      this.setTipsVisibility(true);
      await this.handleSearch(query);
    },
    async handleCrossClick() {
      this.setTipsVisibility(false);

      await Promise.all([
        this.resetQueryString(),
        this.resetSearchTips(),
      ]);
    },
    async handleSearchTipClick({ id: bookId, idx: bookIdx }) {
      this.setTipsVisibility(false);

      await Promise.all([
        this.resetSearchTips(),
        this.pickBookFromSearchTips({ bookId, bookIdx }),
      ]);
    },
    async handleSubmit(query) {
      this.setTipsVisibility(false);

      await Promise.all([
        this.resetSearchTips(),
        this.fetchChosenBooksList({ query }),
      ]);
    },
    setTipsVisibility(status) {
      this.isTipsVisible = status;
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
