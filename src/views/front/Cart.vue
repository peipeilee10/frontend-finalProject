<template>
  <div id="cart" class="container">
    <v-stepper v-model="e1">
      <!-- 進度條 -->
      <v-stepper-header style="width: 80%" class="mx-auto">
        <v-stepper-step :complete="e1 > 1" step="1" color="#00ACC1">
          購物車
        </v-stepper-step>

        <v-divider color="#00ACC1"></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color="#00ACC1">
          訂購資訊
        </v-stepper-step>

        <v-divider color="#00ACC1"></v-divider>

        <v-stepper-step step="3" color="#00ACC1">確認結帳</v-stepper-step>
      </v-stepper-header>

      <!-- 內容區 -->
      <v-stepper-items>
        <!-- 購物車 -->
        <v-stepper-content step="1">
          <div class="text-center">
            <v-data-table :headers="headers" :items="products">
              <template v-slot:item.image="{ item }">
                <!-- {{ item }} -->
                <img
                  v-if="item.product.image"
                  :src="item.product.image"
                  style="height: 100px"
                />
              </template>

              <template v-slot:item.name="{ item }">
                {{ item.product.name }}
              </template>

              <template v-slot:item.price="{ item }">
                $
                {{ new Intl.NumberFormat('en-IN').format(item.product.price) }}
              </template>

              <template v-slot:item.action="{ item, index }">
                <!-- {{index}} -->
                <div class="d-flex align-center">
                  <v-text-field
                    label="數量"
                    type="number"
                    style="width: 10px"
                    v-model="item.quantity"
                    @input="updateCart(index, item.quantity)"
                  ></v-text-field>
                  <v-btn text color="red" @click="updateCart(index, 0)">
                    <v-icon large>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </div>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <h2 class="mb-15 mt-5 text-right">
              總金額：{{ new Intl.NumberFormat('en-IN').format(total) }} 元
            </h2>

            <v-btn class="cart-btn" to="/products" text>回購物首頁</v-btn>

            <v-btn class="ml-10 cart-btn" @click="e1 = 2" text>下一步</v-btn>
          </div>
        </v-stepper-content>

        <!-- 填寫購買資訊 -->

        <v-stepper-content step="2">
          <h1 class="text-center mb-15 mt-10 h1">請填寫訂購資訊</h1>
          <v-form ref="form" lazy-validation @submit.prevent="submitorders">
            <v-row>
              <v-col cols="12" md="6">
                <v-label for="name">訂購人姓名</v-label>
                <v-text-field
                  solo
                  clearable
                  id="name"
                  v-model="form.name"
                  :rules="rules.nameRules"
                  placeholder="訂購人姓名"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-label for="contact">連絡電話</v-label>
                <v-text-field
                  solo
                  clearable
                  id="contact"
                  v-model="form.phone"
                  :rules="rules.phoneRules"
                  placeholder="訂購人聯絡電話"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-label for="email">信箱</v-label>
                <v-text-field
                  solo
                  clearable
                  id="email"
                  v-model="form.email"
                  :rules="rules.emailRules"
                  placeholder="訂購人信箱"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label for="address">地址(非宅配無須填寫)</v-label>
                <v-text-field
                  solo
                  clearable
                  id="address"
                  v-model="form.address"
                  placeholder="訂購人地址"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-radio-group v-model="form.pickupway" row class="mr-15">
                  <v-label>取貨方式</v-label>
                  <v-radio label="宅配" value="宅配"></v-radio>
                  <v-radio label="自取" value="自取"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6">
                <v-radio-group v-model="form.pay" row>
                  <v-label>結帳方式</v-label>
                  <v-radio label="貨到付款" value="貨到付款"></v-radio>
                  <v-radio label="ATM轉帳" value="ATM轉帳"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-label for="memo">備註：</v-label>
                <v-textarea
                  solo
                  clearable
                  outlined
                  id="memo"
                  v-model="form.memo"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
          <div class="text-center">
            <v-btn class="cart-btn" @click="e1 = 1" text>上一步</v-btn>

            <v-btn class="cart-btn ml-10" @click="e1 = 3" type="submit" text>
              下一步
            </v-btn>
          </div>
        </v-stepper-content>

        <!-- 確認結帳 -->
        <v-stepper-content step="3" class="step3">
          <div class="text-center">
            <h1 class="text-center mb-15 mt-10">確認結帳</h1>
            <v-simple-table class="mb-15 text-center">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">項目</th>
                    <th class="text-center">資訊</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>訂購人姓名</td>
                    <td>{{ form.name }}</td>
                  </tr>
                  <tr>
                    <td>訂購人信箱</td>
                    <td>{{ form.email }}</td>
                  </tr>
                  <tr>
                    <td>訂購人地址</td>
                    <td>{{ form.address }}</td>
                  </tr>
                  <tr>
                    <td>訂購人電話</td>
                    <td>{{ form.phone }}</td>
                  </tr>
                  <tr>
                    <td>取貨方式</td>
                    <td>{{ form.pickupway }}</td>
                  </tr>
                  <tr>
                    <td>付款方式</td>
                    <td>{{ form.pay }}</td>
                  </tr>
                  <tr>
                    <td>備註</td>
                    <td>{{ form.memo }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-btn class="cart-btn" @click="e1 = 2" text>上一步</v-btn>

            <v-btn class="cart-btn ml-5" @click="e1 = 1" text>回第一頁</v-btn>

            <v-btn class="cart-btn ml-5" text @click="checkout">確認結帳</v-btn>
          </div>
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
