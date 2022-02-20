<template>
  <div class="container" id="customerComment">
    <h1 class="h1 text-center">顧客好評</h1>
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

          <v-img
            height="250"
            src="../../assets/image/petshower (1).jpg"
          ></v-img>

          <v-card-title>服務熱誠，非常專業的團隊</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-row>

            <div class="my-4">
              家裡的狗狗每次去洗澡就像去玩一樣，
              <br />
              美容師的服務很專業態度很好!
              <br />
              把狗狗帶過去都很放心!
            </div>
          </v-card-text>
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

          <v-img
            height="250"
            src="../../assets/image/petshower (2).jpg"
          ></v-img>

          <v-card-title>美容師溫柔有耐心</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-row>

            <div class="my-4">
              非常值得推薦的寵物美容
              <br />
              美容師很細心也很有耐心，也會主動告知毛孩的狀況
              <br />
              讓我們多加注意，真的很安心!
            </div>
          </v-card-text>
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

          <v-img height="250" src="../../assets/image/petshower(3).jpg"></v-img>

          <v-card-title>明亮的店面，親切的服務</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-row>

            <div class="my-4">
              店內明亮乾淨，環境很棒
              <br />
              毛小孩放鬆洗香香的好地方
              <br />
              值得推薦給各個爸爸媽媽們!
            </div>
          </v-card-text>
        </v-card>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="text-center">
      <v-btn to="/appointment" class="appointmentbtn">立即預約</v-btn>
    </div>
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
              spaceBetween: 30
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
