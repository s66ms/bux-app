<template>
  <swiper
    class="slider-main"
    :slides-per-view="1"
    :space-between="10"
    :modules="modules"
    :navigation="{
      nextEl: '.slider-main-nav__next',
      prevEl: '.slider-main-nav__prev'
    }"
    :loop="false"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide
      v-for="i in 5"
      :key="i"
    >
      <div class="slide-1">
        Working with this consulting firm was a game-
        <br>changer for our business. Their strategic insights
        <br> transformed our approach and boosted our success.
      </div>
      <div class="slide-2">
        123
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
  margin-top: 5%;
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
.slide-1 {
  background: #FFFFFF;
  min-height: 150px;
  text-align: center;
}
.slide-2 {
  background: #EE4312;
  min-height: 150px;
}
</style>
