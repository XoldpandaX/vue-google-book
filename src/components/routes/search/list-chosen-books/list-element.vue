<template>
  <div
    class="list-element"
    @click="$emit('list-el-click', item.id)"
  >
    <div class="list-element__cover">
      <app-image
        alt="book cover"
        :src="item.thumbnail"
        :size="{ width: 74, height: 101 }"
      />
    </div>
    <div class="list-element__main-info">
      <app-rating :rating="item.averageRating || 0" />
      <app-title :level="3">{{ item.abbreviatedTitle }}</app-title>
      <app-text
        size-type="secondary"
        line-height-type="tertiary"
      >
        {{ item.abbreviatedDescription }}
      </app-text>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppImage } from '@/components/common/app-image';
import { AppText } from '@/components/common/app-text';
import { AppTitle } from '@/components/common/app-title';
import { AppRating } from '@/components/common/app-rating';

export default {
  name: 'list-element',
  components: {
    AppImage,
    AppText,
    AppTitle,
    AppRating,
  },
  props: {
    item: VueTypes.object.isRequired,
  },
};
</script>
