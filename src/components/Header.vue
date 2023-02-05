<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <a href="#">
          <img
            src="../assets/images/logo.svg"
            alt="logo of the site"
            class="header__logo-image"
          />
        </a>
      </div>
      <Navigation />
      <div class="header__button">
        <Button @click="clickBtn" :disabled="false" />
      </div>
    </div>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Button,
    Navigation,
  },
  data() {
    return {};
  },
  methods: {
    clickBtn() {
      alert("Заказать звонок :)");
    },
  },
};
</script>
