<template>
  <div class="home">
    <Header />
    <Carousel
      :navigation="false"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="4000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide__info">
          <img :src="require(`../assets/images/${slide}.png`)" alt="" />
          <h1 class="carousel__title">
            Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>
          </h1>
        </div>
      </Slide>
    </Carousel>
  </div>

  <Services />

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Services from "../components/Services.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Slide,
    Services,
    Footer,
  },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3", "bg-4"];

    return { carouselSlides };
  },
  computed: {},
};
</script>
