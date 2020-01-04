<template>
  <wrapper-template
    :class="rootClasses"
    :size="{ width: '54%', height: '100%' }"
    :background-image="initBackgroundImage"
    :background-color="mainBackgroundColor"
  >
    <init-title v-if="isBookEmpty">Library</init-title>

    <template v-else>
      <div class="book-info__inner">
        <app-image
          class="book-cover"
          alt="book cover"
          :src="book.thumbnail"
        />
        <div class="book-info__main">
          <book-description :description="bookDescription" />
          <book-rating :rating="book.averageRating || 0"/>
        </div>
      </div>
      <book-excerpt>{{ book.description }}</book-excerpt>
    </template>
  </wrapper-template>
</template>

<script>
import VueTypes from 'vue-types';
import isEmpty from 'lodash.isempty';
import backgroundImage from '@/assets/svg/background.svg';

import { AppImage } from '@/components/common/app-image';
import BookExcerpt from './book-excerpt.vue';
import { BookDescription } from './book-description';
import BookRating from './book-rating.vue';
import InitTitle from './init-title.vue';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'book-info',
  components: {
    AppImage,
    BookExcerpt,
    BookDescription,
    BookRating,
    InitTitle,
    WrapperTemplate,
  },
  props: {
    book: VueTypes.shape({
      id: VueTypes.string,
      averageRating: VueTypes.oneOfType([VueTypes.number, VueTypes.string]),
      title: VueTypes.string,
      publishedYear: VueTypes.string,
      authors: VueTypes.string,
      description: VueTypes.string,
      thumbnail: VueTypes.string,
    }).isRequired,
    isBookLoading: VueTypes.bool.def(false),
  },
  computed: {
    isBookEmpty() {
      return isEmpty(this.book);
    },
    initBackgroundImage() {
      return this.isBookEmpty ? backgroundImage : '';
    },
    mainBackgroundColor() {
      return !this.isBookEmpty ? '#F3F3F3' : '';
    },
    bookDescription() {
      return {
        title: this.book.title,
        rating: this.book.averageRating,
        authors: this.book.authors,
        year: this.book.publishedYear,
      };
    },
    rootClasses() {
      const base = 'book-info';

      return [
        base,
        this.isBookLoading ? `${base}--loading` : null,
      ];
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'book-info';
</style>
