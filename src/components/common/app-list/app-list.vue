<template>
  <ul class="app-list">
    <li
      v-for="(listItem, idx) in listItems"
      :key="listItem.id + idx"
    >
      <slot
        :item="listItem"
        :idx="idx"
      />
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
