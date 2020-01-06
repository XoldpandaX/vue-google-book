<template>
  <div class="book-info__in-favorite">
    <app-icon
      name="heart"
      color="#ea3232"
    />
    <app-text>in your favorites</app-text>
  </div>
</template>

<script>
import { AppIcon } from '@/components/common/app-icon';
import { AppText } from '@/components/common/app-text';

export default {
  name: 'book-info-in-favorite',
  components: {
    AppIcon,
    AppText,
  },
};
</script>
