<template>
  <Home />
  <router-view />
</template>

<script>
import Home from "../src/views/Home.vue";
export default {
  name: "app",
  components: {
    Home,
  },
  data() {
    return {};
  },
};
</script>
