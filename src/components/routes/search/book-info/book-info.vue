<template>
  <wrapper-template
    class="book-info"
    :size="{ width: '50%', height: '100%' }"
    :background-image="initBackground"
  >
    <app-title
      v-if="isBookEmpty"
      class="book-info__init-title"
      type-color="secondary"
      :level="1"
      :custom-font-size="60"
    >
      Library
    </app-title>
  </wrapper-template>
</template>

<script>
import VueTypes from 'vue-types';
import isEmpty from 'lodash.isempty';
import backgroundImage from '@/assets/svg/background.svg';

import { AppTitle } from '@/components/common/app-title';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'book-info',
  components: {
    AppTitle,
    WrapperTemplate,
  },
  props: {
    book: VueTypes.object.def({}), // TODO: need to create shape when structure appears
  },
  computed: {
    isBookEmpty() {
      return isEmpty(this.book);
    },
    initBackground() {
      return backgroundImage;
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'book-info';
</style>
