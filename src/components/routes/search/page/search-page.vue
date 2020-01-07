<template>
  <section :class="rootClasses">
    <div class="search-page__wrapper">
<!--      <button @click="f">sign out</button>-->
      <template v-if="!isSmallScreens"> <!-- desktop version -->
        <container-book-info />
        <container-wrapper-main />
      </template>

      <template v-if="isSmallScreens">  <!-- mobile version -->
        <container-mobile-header v-if="isMobileHeaderAvailable" />
        <container-mobile-wrapper-search v-if="!isBookWasChosen" />
        <container-book-info v-else/>
        <loader-clip
          v-if="isMobileLoaderAvailable"
          class="search-page__mobile-global-loader"
          size="36px"
        />
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mixinWindowResize } from '@/mixins';
import { ROUTES, LIBRARY_CONSTANTS } from '@/constants';

import { ContainerBookInfo } from '../container-book-info';
import { ContainerMobileWrapperSearch } from '../container-mobile-wrapper-search';
import { ContainerMobileHeader } from '../container-mobile-header';
import { ContainerWrapperMain } from '../container-wrapper-main';
import { LoaderClip } from '@/components/common/loader-clip';

export default {
  name: 'search-page',
  components: {
    ContainerBookInfo,
    ContainerMobileWrapperSearch,
    ContainerMobileHeader,
    ContainerWrapperMain,
    LoaderClip,
  },
  mixins: [mixinWindowResize],
  watch: {
    async mix_windowWidth(val) {
      await this.changeWindowWidth({ width: val });
    },
  },
  computed: {
    ...mapGetters('library', [
      'isBookWasChosen',
      'isBookInfoLoading',
      'isBooksLoading',
      'currentViewMode',
    ]),
    ...mapGetters('ui', ['isDesktopWidth', 'isSmallScreens']),

    rootClasses() {
      const base = 'search-page';

      return [base, this.pagePositionClass];
    },
    pagePositionClass() {
      return `search-page--${
        this.mix_windowHeight < 900 && this.isDesktopWidth
          ? 'indent-pos'
          : 'center-pos'}`;
    },
    isMobileLoaderAvailable() {
      return this.isBookInfoLoading || this.isBooksLoading;
    },
    isMobileHeaderAvailable() {
      return this.isBookWasChosen || this.currentViewMode === LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE;
    },
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    ...mapActions('ui', ['changeWindowWidth']),

    async f() {
      await this.signOut();
      await this.$router.push({ name: ROUTES.HOME.NAME });
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'search-page';
</style>
