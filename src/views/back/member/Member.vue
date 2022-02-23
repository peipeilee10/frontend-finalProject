<template>
  <div id="member">
    <headers></headers>
    <div class="container d-flex mt-15">
      <v-row>
        <v-col cols="12" lg="2">
          <div>
            <v-tabs vertical class="d-none d-lg-flex">
              <v-tab to="/back/member">
                <v-icon left>mdi-account</v-icon>
                會員資料設定
              </v-tab>
              <v-tab to="/back/member/appointment">
                <v-icon left>mdi-calendar-clock-outline</v-icon>
                美容預約管理
              </v-tab>
              <v-tab to="/back/member/orders">
                <v-icon left>mdi-briefcase-check-outline</v-icon>
                商品訂購管理
              </v-tab>
            </v-tabs>
          </div>
          <div>
            <v-tabs class="d-lg-none d-xl-none">
              <v-tab to="/back/member">
                <v-icon left>mdi-account</v-icon>
                會員資料設定
              </v-tab>
              <v-tab to="/back/member/appointment">
                <v-icon left>mdi-calendar-clock-outline</v-icon>
                美容預約管理
              </v-tab>
              <v-tab to="/back/member/orders">
                <v-icon left>mdi-briefcase-check-outline</v-icon>
                商品訂購管理
              </v-tab>
            </v-tabs>
          </div>
        </v-col>
        <v-col cols="12" lg="10">
          <router-view></router-view>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import headers from '../../../components/header.vue'
  export default {
    components: {
      headers
    }
  }
</script>
