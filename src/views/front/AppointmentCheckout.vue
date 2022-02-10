<template>
  <div class="container" id="appointmentCheckout">
    <v-stepper v-model="e1">
      <!-- 進度條 -->
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">預約資訊</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">確認預約</v-stepper-step>
      </v-stepper-header>

      <!--內容區 -->
      <v-stepper-items>
        <!-- 預約資訊 -->
        <v-stepper-content step="1">
          <h1 class="text-center mb-15 mt-10">請填寫預約資訊</h1>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="submitorders"
          >
            <v-label for="name">預約人姓名</v-label>
            <v-text-field
              id="name"
              v-model="form.name"
              :rules="rules.nameRules"
              placeholder="訂購人姓名"
              required
            ></v-text-field>

            <v-label for="email">預約人電話</v-label>
            <v-text-field
              id="email"
              v-model="form.email"
              :rules="rules.emailRules"
              placeholder="訂購人信箱"
              required
            ></v-text-field>

            <v-label for="contact">預約人信箱</v-label>
            <v-text-field
              id="contact"
              v-model="form.phone"
              :rules="rules.phoneRules"
              placeholder="訂購人聯絡電話"
              required
            ></v-text-field>

            <v-label for="contact">毛孩名字</v-label>
            <v-text-field
              id="contact"
              v-model="form.phone"
              :rules="rules.phoneRules"
              placeholder="訂購人聯絡電話"
              required
            ></v-text-field>

            <v-label for="contact">毛孩品種</v-label>
            <v-text-field
              id="contact"
              v-model="form.phone"
              :rules="rules.phoneRules"
              placeholder="訂購人聯絡電話"
              required
            ></v-text-field>

            <v-label for="memo">備註：</v-label>
            <v-textarea outlined id="memo" v-model="form.memo"></v-textarea>
          </v-form>

          <v-btn class="cart-btn" @click="e1 = 1" text>上一步</v-btn>

          <v-btn class="cart-btn ml-10" @click="e1 = 3" type="submit" text>
            下一步
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        e1: 1,
        products: [],
        headers: [
          { text: '圖片', value: 'image' },
          { text: '商品名', value: 'name' },
          { text: '價格', value: 'price' },
          { text: '操作', value: 'action' }
        ],
        form: {
          name: '',
          email: '',
          address: '',
          phone: '',
          memo: '',
          pay: '貨到付款',
          pickupway: '宅配'
        }
      }
    },
    computed: {
      rules() {
        return {
          nameRules: [v => !!v || '姓名必填'],
          emailRules: [
            v => !!v || '信箱必填',
            v => /.+@.+\..+/.test(v) || '信箱格式錯誤'
          ],
          phoneRules: [v => !!v || '電話必填']
        }
      },
      total() {
        return this.products.reduce((accumulator, currentValue) => {
          return (
            accumulator + currentValue.quantity * currentValue.product.price
          )
        }, 0)
      }
    },
    methods: {
      async updateCart(index, quantity) {
        try {
          // 更新購物車
          await this.api.patch(
            'users/me/cart',
            {
              product: this.products[index].product._id,
              quantity
            },
            {
              headers: {
                authorization: 'Bearer ' + this.user.token
              }
            }
          )
          // 刪除
          if (quantity === 0) {
            this.products.splice(index, 1)
            this.$store.commit('user/updateCart', this.user.cart - 1)
          }
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: '修改購物車失敗'
          })
        }
      },
      async checkout() {
        try {
          await this.api.post('/orders', this.form, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '已成功完成下定!'
          })
          this.$router.push('/back/member/orders')
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: '結帳失敗'
          })
        }
      }
    },
    async created() {
      // 拿vuex資料
      this.form.name = this.user.name
      this.form.email = this.user.email
      this.form.address = this.user.address
      this.form.phone = this.user.phone
      try {
        const { data } = await this.api.get('users/me/cart', {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.products = data.result
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '取得購物車失敗'
        })
      }
    }
  }
</script>
