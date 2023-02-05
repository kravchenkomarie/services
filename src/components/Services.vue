<template>
  <section class="services">
    <div class="services__title">
      <h2>Наши услуги</h2>
    </div>
    <div class="services__container">
      <ServiceCard
        v-for="service in visibleServices"
        :key="service.src"
        :service="service"
      />
    </div>
    <Button
      @click="servicesVisible += step"
      v-if="servicesVisible < services.length"
      title="Все услуги"
      class="button button__services"
    />
  </section>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue";
import Button from "../components/Button.vue";
export default {
  name: "Services",
  components: {
    ServiceCard,
    Button,
  },
  data() {
    return {
      services: [
        {
          src: require("../assets/images/card-image2.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image5.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image1.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image3.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image4.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image6.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image2.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image5.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image1.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image3.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image4.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
        {
          src: require("../assets/images/card-image6.png"),
          title: "Кадастровые работы в отношении земельных участков",
        },
      ],
      servicesVisible: 6,
      step: 6,
    };
  },
  methods: {
    loadMore() {
      alert("hello");
    },
  },
  computed: {
    visibleServices() {
      return this.services.slice(0, this.servicesVisible);
    },
  },
};
</script>
