<template>
  <div id="headernav">
    <v-row id="header" class="d-flex align-center">
      <v-app-bar-nav-icon
        @click="sidebar = !sidebar"
        class="hidden-md-and-up ms-5"
      ></v-app-bar-nav-icon>
      <v-col class="d-flex justify-center align-center">
        <a href="https://www.facebook.com/" target="_blank" class="me-2 hidden-md-and-down">
          <v-icon large color="grey darken-1">mdi-facebook</v-icon>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="me-2 hidden-md-and-down">
          <v-icon large color="grey darken-1">mdi-instagram</v-icon>
        </a>
        <a href="#" class="me-2 hidden-md-and-down">
          <v-icon large color="grey darken-1">mdi-forum</v-icon>
        </a>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <router-link to="/">
          <img src="../assets/image/logo_header-01.png" class="logoimg" />
        </router-link>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <!-- 尚未登入 -->
        <router-link to="/login">
          <v-icon large color="grey darken-1" class="mr-5" v-if="!user.isLogin">
            mdi-account-arrow-left
          </v-icon>
        </router-link>
        <!-- 已登入 -->
        <router-link to="/back/member">
          <v-icon
            large
            color="grey darken-1"
            class="mr-5 hidden-md-and-down"
            v-if="user.isLogin && !user.isAdmin"
          >
            mdi-account
          </v-icon>
        </router-link>
        <router-link to="/back/admin">
          <v-icon
            large
            color="grey darken-1"
            class="mr-5 hidden-md-and-down"
            v-if="user.isLogin && user.isAdmin"
          >
            mdi-account-tie-hat
          </v-icon>
        </router-link>
        <router-link to="/cart">
          <v-badge
            color="red"
            :content="user.cart"
            v-if="user.cart"
            class="mb-5"
          ></v-badge>
          <v-icon large color="grey darken-1" class="mr-5" v-if="user.isLogin">
            mdi-cart-outline +
          </v-icon>
        </router-link>
        <router-link to="/">
          <v-icon
            large
            color="grey darken-1"
            v-if="user.isLogin"
            @click="logout"
            class="hidden-md-and-down"
          >
            mdi-logout
          </v-icon>
        </router-link>
      </v-col>
    </v-row>

    <!-- 導覽列 -->
    <nav>
      <v-app-bar
        flat
        id="navbar"
        height="60px"
        min-width="100vw"
        class="justify-end hidden-sm-and-down cyan darken-1 appbar"
      >
        <v-row class="d-flex justify-center">
          <v-toolbar-items>
            <v-btn
              :ripple="false"
              plain
              text
              to="/"
              class="white--text navbartext"
            >
              <v-icon>mdi-home</v-icon>
              &nbsp;&nbsp;首頁
            </v-btn>
            <v-btn
              :ripple="false"
              plain
              text
              to="/service"
              class="white--text navbartext"
            >
              <v-icon>mdi-dog-service</v-icon>
              &nbsp;&nbsp;服務項目
            </v-btn>
            <v-btn
              :ripple="false"
              plain
              text
              to="/appointment"
              class="white--text navbartext"
            >
              <v-icon>mdi-clipboard-edit-outline</v-icon>
              &nbsp;&nbsp;線上預約
            </v-btn>
            <v-btn
              :ripple="false"
              plain
              text
              to="/products"
              class="white--text navbartext"
            >
              <v-icon>mdi-shopping-outline</v-icon>
              &nbsp;&nbsp;線上購物
            </v-btn>
            <v-btn
              :ripple="false"
              plain
              text
              to="/adopt"
              class="white--text navbartext"
            >
              <v-icon>mdi-dog</v-icon>
              &nbsp;&nbsp;浪浪認養
            </v-btn>
            <v-btn
              :ripple="false"
              plain
              text
              to="/contact"
              class="white--text navbartext"
            >
              <v-icon>mdi-phone-classic</v-icon>
              &nbsp;&nbsp; 聯絡我們
            </v-btn>
          </v-toolbar-items>
        </v-row>
      </v-app-bar>

      <!-- 縮小左側欄 -->

      <v-navigation-drawer v-model="sidebar" disable-resize-watcher app>
        <div class="text-center">
          <img
            src="../assets/image/HappyShowerLogo-01.png"
            class="logoimgdrawer"
          />
        </div>
        <v-list flat>
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                首頁
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/service">
              <v-list-item-icon>
                <v-icon>mdi-dog-service</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                服務項目
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/appointment">
              <v-list-item-icon>
                <v-icon>mdi-clipboard-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                線上預約
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/products">
              <v-list-item-icon>
                <v-icon>mdi-shopping-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                線上購物
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/adopt">
              <v-list-item-icon>
                <v-icon>mdi-dog</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                浪浪認養
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/contact" class="justify-center p-0">
              <v-list-item-icon>
                <v-icon>mdi-phone-classic</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                聯絡我們
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              v-show="user.isLogin && !user.isAdmin"
              to="/back/member"
              class="justify-center p-0"
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="justify-center">
                會員專區
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              v-show="user.isLogin && user.isAdmin"
              to="/back/admin"
              class="justify-center p-0"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-tie-hat</v-icon>
              </v-list-item-icon>

              <v-list-item-content
                v-if="user.isLogin && user.isAdmin"
                class="justify-center"
              >
                管理員專區
              </v-list-item-content>
            </v-list-item>

            <div class="d-flex justify-center mt-10">
              <span
                v-if="user.isLogin"
                class="mr-5 text-h6 cyan--text text--darken-1 font-weight-bold"
                @click="logout"
              >
                登出
              </span>
              <router-link to="/login">
                <span
                  v-if="!user.isLogin"
                  class="mr-5 text-h6 cyan--text text--darken-1 font-weight-bold"
                >
                  登入
                </span>
              </router-link>
              <span class="text-h5">|</span>
              <router-link to="/register">
                <span
                  class="ml-5 text-h6 cyan--text text--darken-1 font-weight-bold"
                >
                  註冊
                </span>
              </router-link>
            </div>
            <div class="text-center mt-10"></div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sidebar: false
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/logout')
      }
    },
    async created() {
      this.$store.dispatch('user/getInfo')
    }
  }
</script>
<style>
  #navbar {
    z-index: 99999;
  }
  a {
    text-decoration: none;
  }
</style>
