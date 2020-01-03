<template>
  <app-title
    class="book-info__init-title"
    type-color="secondary"
    :level="1"
    :custom-font-size="60"
  >
    <slot />
  </app-title>
</template>

<script>
import { AppTitle } from '@/components/common/app-title';

export default {
  name: 'init-title',
  components: {
    AppTitle,
  },
};
</script>
