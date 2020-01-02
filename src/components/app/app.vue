<template>
  <div id="app">
    <transition
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import 'src/assets/styles/index';
  @import 'app';
</style>
