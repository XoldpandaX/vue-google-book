<template>
  <app-button
    :type="type"
    size="small"
    :attr-type="attrType"
    :is-enable="isEnable"
    @button-click="$emit('button-click')"
  >
    <slot v-if="isEnable" />
    <loader-pulse
      v-else
      size="10px"
      color="#fff"
    />
  </app-button>
</template>

<script>
import VueTypes from 'vue-types';

import { AppButton } from '@/components/common/app-button';
import { LoaderPulse } from '@/components/common/loader-pulse';

export default {
  name: 'button-with-loader',
  components: {
    AppButton,
    LoaderPulse,
  },
  props: {
    isEnable: VueTypes.bool.def(true),
    attrType: VueTypes.string.def('button'),
    type: VueTypes.oneOf([
      'primary',
      'secondary',
      'with-icon',
      'switch',
      'fetch-more',
    ]).def('primary'),
  },
};
</script>
