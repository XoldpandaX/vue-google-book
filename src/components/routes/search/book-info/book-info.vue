<template>
  <wrapper-template
    :class="rootClasses"
    :size="{ width: '54%', height: '100%' }"
    :background-image="initBackgroundImage"
    :background-color="mainBackgroundColor"
  >
    <init-title v-if="isBookEmpty">Library</init-title> <!-- first default render -->

    <template v-else> <!-- main info of picked book -->
      <div class="book-info__inner">
        <app-image
          class="book-cover"
          alt="book cover"
          :src="book.thumbnail"
        />
        <div class="book-info__main">
          <book-description :description="bookDescription" />
          <book-rating :rating="book.averageRating || 0"/>
          <template v-if="isSearchMode"> <!-- show only in search mode -->
            <book-btn-add-to-favorite
              v-if="isAddFavoriteBtnEnable"
              @add-to-favorite-click="handleAddToFavorite"
            />
            <book-info-in-favorite v-else />
          </template>

          <template v-else>  <!-- show only in favorites mode -->
            <book-btn-redirect :link="book.link" />
          </template>
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
import { LIBRARY_CONSTANTS } from '@/constants';

import { AppImage } from '@/components/common/app-image';
import BookExcerpt from './book-excerpt.vue';
import BookBtnAddToFavorite from './book-btn-add-to-favorite.vue';
import BookBtnRedirect from './book-btn-redirect.vue';
import { BookDescription } from './book-description';
import BookInfoInFavorite from './book-info-in-favorite.vue';
import BookRating from './book-rating.vue';
import InitTitle from './init-title.vue';
import { WrapperTemplate } from '@/components/common/wrapper-template';

export default {
  name: 'book-info',
  components: {
    AppImage,
    BookExcerpt,
    BookBtnAddToFavorite,
    BookBtnRedirect,
    BookDescription,
    BookInfoInFavorite,
    BookRating,
    InitTitle,
    WrapperTemplate,
  },
  props: {
    book: VueTypes.shape({
      id: VueTypes.string,
      etag: VueTypes.string,
      averageRating: VueTypes.oneOfType([VueTypes.number, VueTypes.string]),
      title: VueTypes.string,
      abbreviatedTitle: VueTypes.string,
      publishedYear: VueTypes.string,
      authors: VueTypes.string,
      description: VueTypes.string,
      abbreviatedDescription: VueTypes.string,
      thumbnail: VueTypes.string,
      isInFavorite: VueTypes.bool,
      link: VueTypes.string,
    }).isRequired,
    isBookLoading: VueTypes.bool.def(false),
    currentViewMode: VueTypes.oneOf([
      LIBRARY_CONSTANTS.SEARCH_VIEW_MODE,
      LIBRARY_CONSTANTS.FAVORITES_VIEW_MODE,
    ]),
  },
  data() {
    return {
      isAddToFavoriteBtnClicked: false,
    };
  },
  watch: {
    book() {
      this.isAddToFavoriteBtnClicked = false;
    },
  },
  computed: {
    isBookEmpty() {
      return isEmpty(this.book);
    },
    isSearchMode() {
      return this.currentViewMode === LIBRARY_CONSTANTS.SEARCH_VIEW_MODE;
    },
    isAddFavoriteBtnEnable() {
      return !this.book.isInFavorite && !this.isAddToFavoriteBtnClicked;
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
  methods: {
    handleAddToFavorite() {
      this.isAddToFavoriteBtnClicked = true;
      this.$emit('add-to-favorite');
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'book-info';
</style>
