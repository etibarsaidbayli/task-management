<template>
  <div class="container">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
