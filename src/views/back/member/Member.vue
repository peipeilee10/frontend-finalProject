<template>
    <div id="member">
        <headers></headers>
        <div class="container d-flex mt-15">
            <div class="d-flex justify-space-around flex-column">
                <v-tabs vertical>
                        <v-tab to="/back/member">
                            <v-icon left>
                                mdi-account
                            </v-icon>
                                會員資料設定
                        </v-tab>
                        <v-tab to="/back/member/appointment">
                            <v-icon left>
                                mdi-calendar-clock-outline
                            </v-icon>
                                美容預約管理
                        </v-tab>
                        <v-tab to="/back/member/orders">
                            <v-icon left>
                                mdi-briefcase-check-outline
                            </v-icon>
                                商品訂購管理
                        </v-tab>
                </v-tabs>
            </div>
            <router-view class="ml-15"></router-view>
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
