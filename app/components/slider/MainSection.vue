<template>
  <swiper
    class="slider-main"
    :slides-per-view="1"
    :space-between="10"
    :modules="modules"
    :navigation="{
      nextEl: '.slider-main-nav__prev',
      prevEl: '.slider-main-nav__next'
    }"
    :loop="false"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide
      v-for="i in 5"
      :key="i"
    >
      <div class="slide">
        Slide {{ i }}
      </div>
    </swiper-slide>
  </swiper>
  <div class="slider-main-nav">
    <div class="slider-main-nav__prev">
      Prev
    </div>
    <div class="slider-main-nav__next">
      Next
    </div>
  </div>
</template>

<script>
import {
  Swiper, SwiperSlide
} from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'SliderMainSection',
  components: {
    SwiperSlide,
    Swiper
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
      onSlideChange,
      modules: [Navigation]
    }
  }
}
</script>

<style scoped lang="scss">
.slider-main {
  width: 500px;
  background: gray;

  //:deep() {
  //  .swiper-wrapper {
  //  }
  //}
  &-nav {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background: #fff;

    &__prev,
    &__next {
      padding: 10px;
      background: #000;
    }
  }
}
.slide {
  background: blue;
  min-height: 200px;
}
</style>
