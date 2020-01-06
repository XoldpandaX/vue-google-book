<template>
  <div class="book-info__buttons-row">
    <button-icon
      icon-name="heart"
      icon-color="#ea3232"
      :size="{ width: 20, height: 18.35 }"
    />
    <app-text
      class="book-info__redirect"
      color-type="additional"
      size-type="secondary">
      <a
        :href="link"
        target="_blank"
      >
        Go to book
      </a>
    </app-text>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

import { AppText } from '@/components/common/app-text';
import { ButtonIcon } from '@/components/common/button-icon';

export default {
  name: 'book-btn-redirect',
  components: {
    AppText,
    ButtonIcon,
  },
  props: {
    link: VueTypes.string.def(''),
  },
};
</script>
