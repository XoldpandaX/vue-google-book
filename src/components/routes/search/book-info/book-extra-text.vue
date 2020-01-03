<template>
  <div class="book-extra-info">
    <app-text
      size-type="primary"
      color-type="quaternary"
    >
      <slot name="title" />
      <app-text
        size-type="primary"
        :color-type="infoColor"
        :is-inline="true"
      >
        <slot name="info" />
      </app-text>
    </app-text>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppText } from '@/components/common/app-text';

export default {
  name: 'book-extra-text',
  components: {
    AppText,
  },
  props: {
    infoColor: VueTypes.oneOf(['primary', 'additional']).def('primary'),
  },
};
</script>
