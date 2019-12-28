<template>
  <div class="home">
    <img
      src="@/assets/png/logo.png"
      alt="Vue logo"
    >
    <app-rating
      :rating="3.8"
    />
    <app-input
      v-model="field"
      placeholder="Поиск"
    />
    <p>{{ field }}</p>
    <form-auth />
    <button-icon
      icon-name="heart"
      @button-click="c"
    />
    <app-text size-type="primary">
      This document is intended for developers who want to write applications that
      can interact with the Books API. Google Books has a mission to digitize the world's book
      content and make it more discoverable on the Web. The Books API is a way to search and access
      that content, as well as to create and view personalization around that content.
      If you're unfamiliar with Google Books concepts, you should read Getting Started before
      starting to code.
    </app-text>
  </div>
</template>

<script>
import { AppInput } from '@/components/common/app-input';
import { AppRating } from '@/components/common/app-rating';
import { FormAuth } from '../form-auth';
import { ButtonIcon } from '@/components/common/button-icon';
import { AppText } from '@/components/common/app-text';

export default {
  name: 'home',
  components: {
    AppInput,
    AppRating,
    FormAuth,
    ButtonIcon,
    AppText,
  },
  data() {
    return {
      field: '',
    };
  },
  methods: {
    c() {
      console.info('hello');
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'home-page';
</style>
