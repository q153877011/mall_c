<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar.vue";
import test from "./components/content/test/test";
export default {
  name: "App",
  components: {
    MainTabBar,
    test
  }
};
</script>

MainTabBar
<style>
@import "./assets/css/base.css";
</style>
