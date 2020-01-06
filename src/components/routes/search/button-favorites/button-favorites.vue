<template>
  <div
    :class="rootClasses"
    @mouseenter="changeTooltipVisibility(true)"
    @mouseleave="changeTooltipVisibility(false)"
  >
    <button-icon
      :icon-name="buttonIcon"
      :size="iconSize"
      @button-click="$emit('button-favorite-click')"
    />
    <transition name="fade">
      <div
        v-if="isTooltipVisible && isSearchMode"
        class="button-favorites__tooltip"
      >
        Favorites
      </div>
    </transition>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { LIBRARY_CONSTANTS } from '@/constants';

import { ButtonIcon } from '@/components/common/button-icon';

export default {
  name: 'button-favorites',
  components: {
    ButtonIcon,
  },
  props: {
    viewMode: VueTypes.oneOf([
      LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE,
      LIBRARY_CONSTANTS.SEARCH_VIEW_MODE,
    ]).def(LIBRARY_CONSTANTS.SEARCH_VIEW_MODE),
  },
  data() {
    return {
      isTooltipVisible: false,
    };
  },
  computed: {
    isSearchMode() {
      return this.viewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
    buttonIcon() {
      return this.isSearchMode ? 'heart' : 'arrow-left';
    },
    rootClasses() {
      const base = 'button-favorites';

      return [
        base,
        !this.isSearchMode ? `${base}--favorites` : null,
      ];
    },
    iconSize() {
      return {
        width: this.isSearchMode ? 20 : 18,
        height: this.isSearchMode ? 18.35 : 16.35,
      };
    },
  },
  methods: {
    changeTooltipVisibility(status) {
      if (this.isSearchMode) {
        this.isTooltipVisible = status;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'button-favorites';
</style>
