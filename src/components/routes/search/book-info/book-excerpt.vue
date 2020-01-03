<template>
  <div class="book-excerpt">
    <app-title
      type-color="primary"
      :level="2"
    >
      Book excerpt
    </app-title>
    <app-text
      size-type="primary"
      line-height-type="secondary"
    >
      <slot />
    </app-text>
  </div>
</template>

<script>
import { AppText } from '@/components/common/app-text';
import { AppTitle } from '@/components/common/app-title';

export default {
  name: 'book-excerpt',
  components: {
    AppText,
    AppTitle,
  },
};
</script>
