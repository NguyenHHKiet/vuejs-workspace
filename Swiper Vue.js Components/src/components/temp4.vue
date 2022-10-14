<!-- some-inner-component.vue -->
<template>
  <div>
    <swiper>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <template v-slot:container-start><span>Container start</span></template>
      <template v-slot:container-end><span>Container end</span></template>
      <template v-slot:wrapper-start><span>Wrapper start</span></template>
      <template v-slot:wrapper-end><span>Wrapper end</span></template>
    </swiper>
    <!-- <p>Current slide is {{ swiperSlide.isActive ? "active" : "not active" }}</p> -->
  </div>
</template>
<script>
import { useSwiperSlide } from "swiper/vue";

export default {
  setup() {
    const swiperSlide = useSwiperSlide();

    return {
      swiperSlide,
    };
  },
};
</script>
