<template>
  <div class="app-rating">
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="stars-wrapper"
    >
      <svg
        class="star-svg"
        :style="getSvgInnerStyles(star.gradientId)"
      >
        <polygon
          style="fill-rule:nonzero;"
          :points="starPoints"
        />
        <app-rating-svg-defs
          :id="star.gradientId"
          :offset="star.percent"
          :colors="{ emptyStarColor: config.emptyStarColor, calculatedColor: getFullFillColor(star) }"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import calcStarPoints from './calc-star-points';

import AppRatingSvgDefs from './app-rating-svg-defs.vue';

const emptyStar = 0;
const fullStar = 1;

export default {
  name: 'app-rating',
  components: {
    AppRatingSvgDefs,
  },
  props: {
    rating: VueTypes.number.isRequired,
    starsTotal: VueTypes.number.def(5),
    config: VueTypes.shape({
      width: VueTypes.number,
      height: VueTypes.number,
      emptyStarColor: VueTypes.string,
      fullStarColor: VueTypes.string,
    }).def({
      width: 20,
      height: 19,
      emptyStarColor: '#000000',
      fullStarColor: '#F5A623',
    }),
  },
  computed: {
    starPoints() {
      return calcStarPoints(this.config.width);
    },
    stars() {
      const fullStarsQuantity = Math.floor(this.rating);

      return [...new Array(this.starsTotal)].map((star, idx) => {
        if ((idx + 1) <= fullStarsQuantity) {
          return this.getStarValues(fullStar, `${100}%`);
        }

        if (idx === fullStarsQuantity) { // position of decimal number
          const surplus = Math.round((this.rating % 1) * 10) / 10;
          const gradientId = Math.round(surplus * 10) / 10;

          return this.getStarValues(gradientId, `${gradientId * 100}%`);
        }

        return this.getStarValues(emptyStar, `${emptyStar}%`);
      });
    },
  },
  methods: {
    getSvgInnerStyles(gradientId) {
      return [
        { fill: `url(#gradient${gradientId})` },
        { width: this.config.width },
        { height: this.config.height },
      ];
    },
    getFullFillColor({ gradientId }) {
      const { fullStarColor, emptyStarColor } = this.config;
      return gradientId !== emptyStar ? fullStarColor : emptyStarColor;
    },
    getStarValues(gradientId, percent) {
      return {
        gradientId,
        percent,
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'app-rating';
</style>
