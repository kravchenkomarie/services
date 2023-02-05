<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__image">
        <img :src="service.src" alt="" class="card__image-img" />
      </div>
      <div class="card__text">
        <h3 class="card__title">{{ service.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
  props: ["service"],
};
</script>
