<template>
  <!-- head to be completed. just an example. -->
  <HeaderCom />
  <router-view>
  </router-view>
  <BottomCom />
  <!-- bottom to be completed.just an example. -->
</template>

<script lang="ts" setup>
import HeaderCom from "./components/HeaderCom.vue"
import BottomCom from "./components/BottomCom.vue";
</script>

<style lang = "scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
