<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="size.width"
       :height="size.height"
       :viewBox="iconViewBox"
  >
    <title
      :id="name"
      xml:lang="en"
    >
      {{ name }}
    </title>
    <g :fill="color">
      <component :is="iconComponent" />
    </g>
  </svg>
</template>

<script>
import VueTypes from 'vue-types';
import iconNames from './icon-names';
import iconViewBoxes from './icon-view-boxes';

export default {
  name: 'app-icon',
  props: {
    name: VueTypes.oneOf(Object.values(iconNames)).isRequired,
    size: VueTypes.shape({
      width: VueTypes.number,
      height: VueTypes.number,
    }).isRequired,
    color: VueTypes.string.def('#4B5959'),
  },
  computed: {
    isIconExist() {
      return !!iconNames[this.name];
    },
    iconComponent() {
      return this.isIconExist ? () => import(`./icons/${this.name}.vue`) : null;
    },
    iconViewBox() {
      return this.isIconExist ? iconViewBoxes[this.name] : null;
    },
  },
};
</script>
