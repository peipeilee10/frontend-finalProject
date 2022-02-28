<template>
  <div id="service">
    <h1 class="serviceh1">預約服務流程</h1>
    <div class="serviceProcess">
      <div class="line"></div>
      <div class="reservateservice-wrap-upper">
        <div class="servicetext">
          <p>
            預定
            <br />
            美容日期
          </p>
        </div>
        <div class="servicetext">
          <v-icon size="50" color="cyan darken-1">
            mdi-storefront-outline
          </v-icon>
        </div>
        <div class="servicetext">
          <p>
            完成服務
            <br />
            將電話通知
          </p>
        </div>
        <div class="servicetext">
          <v-icon size="50" color="cyan darken-1">mdi-car-side</v-icon>
        </div>
      </div>
      <div class="dotwrap">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="reservateservice-wrap-lower">
        <div class="servicetext">
          <v-icon size="50" color="cyan   darken-1">
            mdi-calendar-check-outline
          </v-icon>
        </div>
        <div class="servicetext">
          <p>到店服務</p>
        </div>
        <div class="servicetext">
          <v-icon size="50" color="cyan darken-1">mdi-phone-in-talk</v-icon>
        </div>
        <div class="servicetext">
          <p>
            周邊地區
            <br />
            接送服務
          </p>
        </div>
      </div>
    </div>

  <!-- 小版 -->
    <div class="serviceProcess2 ">
      <p>
        <v-icon color="#1d5452" class="mr-5 ">mdi-numeric-1-box-outline</v-icon>
        預定美容日期
      </p>
      <p>
        <v-icon color="#1d5452" class="mr-5 icon">mdi-numeric-2-box-outline</v-icon>
        到店服務
      </p>
      <p>
        <v-icon color="#1d5452" class="mr-5">mdi-numeric-3-box-outline</v-icon>
        完成服務將電話通知
      </p>
      <p>
        <v-icon color="#1d5452" class="mr-5">mdi-numeric-4-box-outline</v-icon>
        周邊地區 接送服務
      </p>
    </div>
  </div>
</template>
