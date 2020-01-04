<template>
  <ul
    v-if="pager.pages && pager.pages.length"
    class="app-pagination pagination"
  >
<!--    this is a dirty hack and an easy way to disable clicking on a-->
<!--    component, just tired of doing it ^_^-->
    <div
      v-if="!isButtonAvailable"
      class="app-pagination__defence"
    />
    <li
      class="page-item previous"
      :class="{'disabled': pager.currentPage === 1}"
    >
      <a class="page-link" @click="setPage(pager.currentPage - maxPages)">
        &#171;
      </a>
    </li>
    <li
      v-for="page in pager.pages"
      :key="page"
      class="page-item page-number"
      :class="{'active': pager.currentPage === page}"
    >
      <a class="page-link" @click="setPage(page)">
        {{ page }}
      </a>
    </li>
    <li
      class="page-item next"
      :class="{'disabled': pager.currentPage === pager.totalPages}"
    >
      <a class="page-link" @click="setPage(pager.currentPage + maxPages)">
        &#187;
      </a>
    </li>
  </ul>
</template>

<script>
import VueTypes from 'vue-types';
import paginate from 'jw-paginate';

export default {
  props: {
    items: VueTypes.array.isRequired,
    initialPage: VueTypes.number.def(1),
    pageSize: VueTypes.number.def(1),
    maxPages: VueTypes.number.def(9),
    isButtonAvailable: VueTypes.bool.def(true),
  },
  created() {
    this.initPage();
  },
  data() {
    return {
      pager: {},
      currentPage: this.initialPage,
    };
  },
  watch: {
    // In case of component still exist on the page, but items updated
    // in app scope it means that new source of books appears
    items() {
      this.initPage();
    },
  },
  methods: {
    setPage(page, isInit = false) {
      const { items, pageSize, maxPages } = this;
      // get new pager object for specified page
      const pager = paginate(items.length, page, pageSize, maxPages);
      // update pager
      this.pager = pager;

      if (!isInit && this.isButtonAvailable && this.currentPage !== page) {
        this.$emit('change-page', page);
        this.changeCurrentPage(page);
      }
    },
    initPage() {
      if (this.items && this.items.length) {
        this.setPage(this.initialPage, true);
      }
    },
    changeCurrentPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-pagination';
</style>
