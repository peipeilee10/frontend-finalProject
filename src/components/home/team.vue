<!-- <template>
<div id="team" >
  <div class="container">
  <h1>團隊介紹</h1>
  <v-row no-gutters>
    <v-col cols="12" md="4">
      <img src="../../assets/image/team01.jpg">
      <div class="title">
        <p>美容師</p>
        <p class="mt-n5">Louis</p>
      </div>
      <div class="lincense">
        <ul>
          <li>KCUA 國際證照C級</li>
          <li>KCT 國際公認美容師C級</li>
          <li>TGA 國際公認美容師B級</li>
        </ul>
      </div>

    </v-col>
    <v-col cols="12" md="4">
      <img src="../../assets/image/team02.jpg">
      <div class="title">
        <p>美容師</p>
        <p class="mt-n5">Keina</p>
      </div>
      <div class="lincense">
        <ul>
          <li>KCUA 國際證照C級</li>
          <li>KCT 國際公認美容師C級</li>
          <li>TGA 國際公認美容師B級</li>
        </ul>
      </div>
    </v-col>
    <v-col  cols="12" md="4">
      <img src="../../assets/image/team03.jpg">
      <div class="title">
        <p>美容師</p>
        <p class="mt-n5">Luby</p>
      </div>
      <div class="lincense">
        <ul>
          <li>KCUA 國際證照C級</li>
          <li>KCT 國際公認美容師C級</li>
          <li>TGA 國際公認美容師B級</li>
        </ul>
      </div>
    </v-col>
  </v-row>
  </div>
</div> -->

<template>
  <div class="container" id="team">
    <h1 class="h1 text-center">團隊介紹</h1>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <img src="../../assets/image/team01.jpg" />

          <div class="mt-10 designer">
            <h3>美容師</h3>
            <p>LOUIS</p>
          </div>

          <div class="mt-10">
            <ul>
              <li>KCUA 國際證照C級</li>
              <li>KCT 國際公認美容師C級</li>
              <li>TGA 國際公認美容師B級</li>
            </ul>
          </div>
        </v-card>
      </swiper-slide>
      <swiper-slide>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <img src="../../assets/image/team02.jpg" />

          <div class="mt-15 designer">
            <h3>美容師</h3>
            <p>KEINA</p>
          </div>

          <div class="mt-10">
            <ul>
              <li>KCUA 國際證照C級</li>
              <li>KCT 國際公認美容師C級</li>
              <li>TGA 國際公認美容師B級</li>
            </ul>
          </div>
        </v-card>
      </swiper-slide>
      <swiper-slide>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <img src="../../assets/image/team03.jpg" />

          <div class="mt-10 designer">
            <h3>美容師</h3>
            <p>LUBY</p>
          </div>

          <div class="mt-10">
            <ul>
              <li>KCUA 國際證照C級</li>
              <li>KCT 國際公認美容師C級</li>
              <li>TGA 國際公認美容師B級</li>
            </ul>
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>
