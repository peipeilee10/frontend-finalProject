<template>
  <v-footer id="footer" color="cyan darken-1">
    <v-row>
      <v-col cols="1" md="2"></v-col>
      <v-col cols="12" md="8">
        <v-row class="footerRow">
          <v-col cols="12" md="6">
            <div class="membercenter">
              <p style="font-weight: 500">會員中心</p>
              <p><router-link to="/back/member">會員中心</router-link></p>
              <p><router-link to="/back/member/appointment">預約查詢</router-link></p>
              <p><router-link to="/back/member/orders">訂單查詢</router-link></p>

            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="contactus">
              <p style="font-weight: 500">聯絡我們</p>
              <p>電話：02-23381223</p>
              <p>地址：新北市中和區中和路38巷1樓</p>
              <p>營業時間：11:30 ~ 20:00 周四公休</p>
              <p>LINE ID：@happyshower</p>
              <div class="d-flex">
                <a href="https://www.facebook.com/" target="_blank" class="me-2">
                  <v-icon color="white">mdi-facebook</v-icon>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="me-2">
                  <v-icon color="white">mdi-instagram</v-icon>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    })
  }
</script>
