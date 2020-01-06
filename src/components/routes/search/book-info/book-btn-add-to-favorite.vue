<template>
  <div
    class="book-info__buttons-row"
    @click="$emit('add-to-favorite-click')"
  >
    <button-icon
      icon-name="not-filled-heart"
      :size="{ width: 20, height: 18.35 }"
    />
    <app-text size-type="secondary">Add to favorites</app-text>
  </div>
</template>

<script>
import { AppText } from '@/components/common/app-text';
import { ButtonIcon } from '@/components/common/button-icon';

export default {
  name: 'book-btn-add-to-favorite',
  components: {
    AppText,
    ButtonIcon,
  },
};
</script>
