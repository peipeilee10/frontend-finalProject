<template>
<div id="carousel">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img class="carousel-img" src="../../assets/image/swiper01.jpg"></swiper-slide>
    <swiper-slide><img class="carousel-img" src="../../assets/image/swiper02.jpg"></swiper-slide>
    <swiper-slide><img class="carousel-img" src="../../assets/image/swiper03.jpg"></swiper-slide>
    <swiper-slide><img class="carousel-img" src="../../assets/image/swiper04.jpg"></swiper-slide>
    <swiper-slide><img class="carousel-img" src="../../assets/image/swiper05.jpg"></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
