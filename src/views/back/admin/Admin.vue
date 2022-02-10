<template>
  <div>
    <v-card id="adminHeader">
      <v-row class="justify-space-between">
        <v-col></v-col>
        <v-col class="justify-center">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="mx-auto pt-5 pb-5">後臺管理</h1>
          </v-card-title>
        </v-col>
        <v-col class="text-right">
          <v-btn :ripple="false" plain class="mr-10 mt-10" to="/">
            <v-icon large color="#1D5452">mdi-home</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-tabs v-model="tab" background-color="transparent" color="#1D5452" grow>
        <v-tab to="/back/admin/appointment">預約管理</v-tab>
        <v-tab to="/back/admin/orders">訂單管理</v-tab>
        <v-tab to="/back/admin/productSell">商品管理</v-tab>
        <v-tab to="/back/admin/carouselchange">前台管理</v-tab>
      </v-tabs>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null
      }
    }
  }
</script>
