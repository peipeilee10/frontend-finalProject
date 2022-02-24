<template>
  <div id="carousel">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="image in carousel" :key="image._id">
        <img class="carousel-img" :src="image.carouselImage" />
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        carousel: [],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 6000,
            disableOninteraction: false
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(2, 1000, false)
    },
    async created() {
      try {
        const { data } = await this.api.get('/pages')
        console.log(data.result)
        this.carousel = data.result
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }
</script>
