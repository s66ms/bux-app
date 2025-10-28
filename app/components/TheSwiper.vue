<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
  <swiper>
    <swiper-slide v-slot="{ isActive }">
      <div>Current slide is {{ isActive ? 'active' : 'not active' }}</div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import {
  Swiper, SwiperSlide
} from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>
