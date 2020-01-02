<template>
  <app-button
    type="with-icon"
    :attr-type="attrType"
    @button-click="$emit('button-click')"
  >
    <app-icon
      :name="iconName"
      :size="size"
      :color="iconColor || undefined"
    />
  </app-button>
</template>

<script>
import VueTypes from 'vue-types';

import { AppButton } from '@/components/common/app-button';
import { AppIcon } from '@/components/common/app-icon';

export default {
  name: 'button-icon',
  components: {
    AppButton,
    AppIcon,
  },
  props: {
    isEnable: VueTypes.bool.def(true),
    iconName: VueTypes.string.isRequired,
    size: VueTypes.shape({
      width: VueTypes.number,
      height: VueTypes.number,
    }),
    iconColor: VueTypes.string,
    attrType: VueTypes.string.def('button'),
  },
};
</script>
