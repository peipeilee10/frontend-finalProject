<template>
  <div id="enviroment">
    <h1>環境介紹</h1>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="../../assets/image/store01.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="img2" src="../../assets/image/store04.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/store03.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/store01.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/store04.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/store03.jpg" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 6000,
            disableOninteraction: false
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }
        }
      }
    }
  }
</script>
