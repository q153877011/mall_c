<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
}
</style>
