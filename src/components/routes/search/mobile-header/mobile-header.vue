<template>
  <header :class="rootClasses">
      <button-icon
        class="mobile-header__return-btn"
        :icon-color="iconColor"
        icon-name="arrow-left"
        :size="{ width: 20, height: 18.35 }"
        @button-click="$emit('back-btn-click')"
      />
    <app-text
      v-if="isAuthorsNameAvailable"
      class="mobile-header__author-names"
      size-type="secondary"
      color-type="tertiary"
    >
      {{ authors || 'authors unknown' }}
    </app-text>
    <app-title
      v-if="isTitleAvailable"
      type-color="primary"
      :level="1"
    >
      Favorites
    </app-title>
  </header>
</template>

<script>
import VueTypes from 'vue-types';

import { AppText } from '@/components/common/app-text';
import { AppTitle } from '@/components/common/app-title';
import { ButtonIcon } from '@/components/common/button-icon';

export default {
  name: 'mobile-header',
  components: {
    AppText,
    AppTitle,
    ButtonIcon,
  },
  props: {
    authors: VueTypes.string.def(''),
    headerType: VueTypes.oneOf(['book', 'favorites']),
  },
  computed: {
    isTitleAvailable() {
      return this.headerType === 'favorites';
    },
    isAuthorsNameAvailable() {
      return !this.isTitleAvailable;
    },
    rootClasses() {
      const base = 'mobile-header';

      return [
        base,
        `${base}--${this.isTitleAvailable ? 'favorites' : 'books'}`,
      ];
    },
    iconColor() {
      return this.isTitleAvailable ? '#4B5959' : 'white';
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'mobile-header';
</style>
