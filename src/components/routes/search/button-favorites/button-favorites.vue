<template>
  <button-icon
    icon-name="heart"
    :size="{ width: 20, height: 18.35 }"
    @button-click="$emit('button-favorite-click')"
  />
</template>

<script>
import { ButtonIcon } from '@/components/common/button-icon';

export default {
  name: 'button-favorites',
  components: {
    ButtonIcon,
  },
};
</script>

<style scoped lang="scss">
  @import 'button-favorites';
</style>
