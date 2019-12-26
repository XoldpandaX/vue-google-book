<template functional>
  <defs>
    <!--id has to be unique to each star fullness(dynamic offset) - it indicates fullness above-->
    <linearGradient :id="`gradient${props.id}`">
      <stop
        v-for="(i, idx) in 2"
        stop-opacity="1"
        :key="idx + i"
        :id="`stop${idx}`"
        :offset="props.offset"
        :stop-color="idx === 1 ? props.colors.emptyStarColor : props.colors.calculatedColor"
      />
    </linearGradient>
  </defs>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-rating-svg-defs',
  props: {
    id: VueTypes.oneOfType([VueTypes.string, VueTypes.number]).isRequired,
    offset: VueTypes.oneOfType([VueTypes.string, VueTypes.number]).isRequired,
    colors: VueTypes.shape({
      emptyStarColor: VueTypes.string,
      calculatedColor: VueTypes.string,
    }),
  },
};
</script>
