<template>
  <ul class="app-list">
    <li
      v-for="listItem in listItems"
      :key="listItem.id"
      :class="itemsClasses"
    >
      <slot :item="listItem" />
    </li>
  </ul>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'app-list',
  props: {
    listItems: VueTypes.array.isRequired,
    itemsClasses: VueTypes.array.def([]),
  },
};
</script>
