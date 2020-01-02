<template>
  <ul class="app-list">
    <li
      v-for="listItem in listItems"
      :key="listItem.id"
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
  },
};
</script>
