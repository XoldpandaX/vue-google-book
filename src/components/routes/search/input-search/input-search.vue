<template>
  <div :class="rootClasses">
    <app-input
      placeholder="Search"
      custom-type="search"
      width="100%"
      :value="value"
      :has-handler-on-enter="true"
      @focus="handleFocus"
      @input="handleInput"
      @enter-press="handleEnterPress"
      @press-key-down="$emit('down-press')"
      @press-key-up="$emit('up-press')"
    />
    <transition name="fade">
      <button-icon
        v-if="isCrossBtnVisible"
        class="input-search__button"
        icon-name="cross"
        :size="{ width: 22, height: 22 }"
        @button-click="$emit('cross-click')"
      />
      <loader-clip
        v-if="isSpinnerVisible"
        size="18px"
      />
    </transition>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { ButtonIcon } from '@/components/common/button-icon';
import { AppInput } from '@/components/common/app-input';
import { LoaderClip } from '@/components/common/loader-clip';

export default {
  name: 'input-search',
  components: {
    AppInput,
    ButtonIcon,
    LoaderClip,
  },
  props: {
    value: VueTypes.string.isRequired,
    isActive: VueTypes.bool.def(false),
    isSearching: VueTypes.bool.def(false),
  },
  computed: {
    rootClasses() {
      const base = 'input-search';

      return [base, this.isActive && `${base}--active`];
    },
    isCrossBtnVisible() {
      return !this.isSpinnerVisible && this.value;
    },
    isSpinnerVisible() {
      return this.isSearching;
    },
  },
  methods: {
    handleFocus(fieldVal) {
      this.$emit('search-focus', fieldVal);
    },
    handleInput(fieldVal) {
      this.$emit('search-input', fieldVal);
    },
    handleEnterPress(e) {
      e.target.blur();
      this.$emit('enter-press', e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'input-search';
</style>
