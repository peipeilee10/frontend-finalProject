<template>
  <div class="container" id="membersettings">
    <h1 class="text-center mb-15">會員資料設定</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitsettings"
    >
      <v-label for="name">姓名</v-label>
      <v-text-field
        id="name"
        v-model="form.name"
        :rules="rules.nameRules"
        placeholder="姓名"
        required
      ></v-text-field>

      <v-label for="email">信箱</v-label>
      <v-text-field
        v-model="form.email"
        :rules="rules.emailRules"
        placeholder="信箱"
        required
      ></v-text-field>

      <v-label for="address">地址</v-label>
      <v-text-field v-model="form.address" placeholder="地址"></v-text-field>

      <v-label for="phone">電話</v-label>
      <v-text-field
        v-model="form.phone"
        placeholder="聯絡電話"
        required
      ></v-text-field>

      <v-btn type="submit" :disabled="!valid" class="mt-15 save-btn">
        儲存設定
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        valid: true,
        row: null,
        form: {
          name: '',
          email: '',
          address: '',
          phone: ''
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
          ]
        }
      }
    },
    methods: {
      async submitsettings() {
        try {
          await this.api.patch('/users/info', this.form, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          console.log(this.form)
          this.$store.commit('user/updateInfo', this.form)
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '更新成功'
          })
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: error.response.data.message
          })
        }
      }
    },
    created() {
      this.form.name = this.user.name
      this.form.email = this.user.email
      this.form.address = this.user.address
      this.form.phone = this.user.phone
    }
  }
</script>
