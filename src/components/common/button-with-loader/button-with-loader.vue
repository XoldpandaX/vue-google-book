<template>
  <app-button
    type="primary"
    size="small"
    :isEnable="isEnable"
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
  },
};
</script>
