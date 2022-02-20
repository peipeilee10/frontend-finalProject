<template>
  <div id="appointmentCheckout">
    <v-stepper v-model="e1">
      <!-- 進度條 -->
      <v-stepper-header style="width: 80%" class="mx-auto">
        <v-stepper-step :complete="e1 > 1" step="1" color="#00ACC1">
          預約資訊
        </v-stepper-step>

        <v-divider color="#00ACC1"></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color="#00ACC1">
          確認預約
        </v-stepper-step>
      </v-stepper-header>

      <!--內容區 -->
      <v-stepper-items>
        <!-- 預約資訊 -->
        <v-stepper-content step="1">
          <h1 class="text-center mb-15 mt-10 h1">請填寫預約資訊</h1>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-label for="name">預約人姓名</v-label>
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
              <v-col cols="6">
                <v-label for="contact">預約人電話</v-label>
                <v-text-field
                  solo
                  clearable
                  id="contact"
                  v-model="form.phone"
                  :rules="rules.phoneRules"
                  placeholder="預約人聯絡電話"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-label for="email">預約人信箱</v-label>
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
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-label for="petname">毛孩名字</v-label>
                <v-text-field
                  solo
                  clearable
                  id="petname"
                  v-model="form.petname"
                  placeholder="毛孩名字"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-label for="petbreed">毛孩品種</v-label>
                <v-text-field
                  solo
                  clearable
                  id="petbreed"
                  v-model="form.petbreed"
                  placeholder="毛孩品種"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-label for="memo">備註：</v-label>
                <v-textarea solo id="memo" v-model="form.memo"></v-textarea>
              </v-col>
            </v-row>
          </v-form>

          <!-- 按鈕 -->
          <div class="text-center mt-10">
            <v-btn class="checkout-btn" to="/appointment" text>重新預約</v-btn>
            <v-btn class="checkout-btn ml-10" @click="e1 = 2" text>
              下一步
            </v-btn>
          </div>
        </v-stepper-content>

        <!-- 確認預約 -->
        <v-stepper-content step="2" class="confirmAppointment">
          <h1 class="text-center mb-15 mt-10 h1">確認預約</h1>
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
                  <td>預約日期</td>
                  <td>{{ form.appointmentdate }}</td>
                </tr>
                <tr>
                  <td>預約時段</td>
                  <td>{{ form.appointmenttime }}</td>
                </tr>
                <tr>
                  <td>預約項目</td>
                  <td>{{ form.serviceitem }}</td>
                </tr>
                <tr>
                  <td>毛小孩類型</td>
                  <td>{{ form.pettype }}</td>
                </tr>
                <tr>
                  <td>預約人姓名</td>
                  <td>{{ form.name }}</td>
                </tr>
                <tr>
                  <td>預約人電話</td>
                  <td>{{ form.phone }}</td>
                </tr>
                <tr>
                  <td>預約人信箱</td>
                  <td>{{ form.email }}</td>
                </tr>
                <tr>
                  <td>毛小孩名字</td>
                  <td>{{ form.petname }}</td>
                </tr>
                <tr>
                  <td>毛小孩品種</td>
                  <td>{{ form.petbreed }}</td>
                </tr>
                <tr>
                  <td>備註</td>
                  <td>{{ form.memo }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="checkout-btn" @click="e1 = 1" text>上一步</v-btn>
            <v-btn class="checkout-btn ml-5" text @click="appointmentCheckOut">
              送出預約
            </v-btn>
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
        fromDateMenu: false,
        e1: 1,
        headers: [
          { text: '圖片', value: 'image' },
          { text: '商品名', value: 'name' },
          { text: '價格', value: 'price' },
          { text: '操作', value: 'action' }
        ],
        form: {
          name: '',
          phone: '',
          email: '',
          petname: '',
          petbreed: '',
          appointmentdate: null,
          memo: '',
          serviceitem: '',
          pettype: '',
          appointmenttime: null
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
      }
    },
    methods: {
      async appointmentCheckOut() {
        try {
          console.log(this.form)
          await this.api.post('/appointments', this.form, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '已成功完成預約!'
          })
          this.$router.push('/back/member/appointment')
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: '預約失敗'
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
      this.form.pettype = this.user.appointment.pettype
      this.form.serviceitem = this.user.appointment.serviceitem
      this.form.appointmenttime = this.user.appointment.time
      this.form.appointmentdate = this.user.appointment.appointmentDate
      // console.log(this.form)
    }
  }
</script>
