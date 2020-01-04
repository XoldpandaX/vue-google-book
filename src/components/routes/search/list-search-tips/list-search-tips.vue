<template>
  <app-list
    class="list-search-tips"
    v-slot="{ item, idx }"
    :list-items="searchTips"
  >
    <div @click="$emit('click-search-tip', { id: item.id, idx })">
      <app-text
        size-type="primary"
        color-type="secondary"
      >
        {{ item.title }}
      </app-text>
    </div>
  </app-list>
</template>

<script>
import VueTypes from 'vue-types';

import { AppList } from '@/components/common/app-list';
import { AppText } from '@/components/common/app-text';

export default {
  name: 'list-search-tips',
  components: {
    AppList,
    AppText,
  },
  props: {
    searchTips: VueTypes.array.isRequired,
  },
};
</script>

<style lang="scss">
  @import 'list-search-tips';
</style>
