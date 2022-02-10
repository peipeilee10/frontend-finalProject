<template>
<div id="register">
  <h1 class="text-center ">洗澡趣 會員註冊</h1>
  <div class="box">
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="register"
  >
  <label for="account">帳號 :</label>
    <v-text-field
      id="account"
      v-model="form.account"
      :counter="10"
      :rules="rules.accountRules"
      placeholder="請輸入帳號"
      required
    ></v-text-field>

    <label for="password">密碼 :</label>
    <v-text-field
      id="password"
      v-model="form.password"
      :type="passwordshow ?'text':'password'"
      :rules="rules.passwordRules"
      :append-icon="passwordshow? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="passwordshow = !passwordshow"
      placeholder="請輸入密碼"
      required
    ></v-text-field>

    <label for="password">確認密碼 :</label>
    <v-text-field
      id="password"
      :type="passwordshow ?'text':'password'"
      :rules="rules.passwordCheckRules"
      :append-icon="passwordshow? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="passwordshow = !passwordshow"
      placeholder="請輸入密碼"
      required
    ></v-text-field>

    <div class="btn-wrap">

      <v-btn
        :disabled="!valid"
        color="orange darken-1 white--text"
        class="mr-4 mt-10"
        type="submit"
      >
        註冊
      </v-btn>
    </div>
  </v-form>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      passwordshow: false,
      valid: true,
      form: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        accountRules: [v => !!v || '帳號為必填欄位',
          v => (v && v.length <= 10 && v.length >= 4) || '帳號長度必須介於4-10個字'],
        passwordRules: [
          v => !!v || '密碼必填',
          v => (v && v.length >= 4) || '密碼長度不得小於4個字'
        ],
        passwordCheckRules: [
          v => !!v || '密碼必填',
          v => (v && v === this.form.password) || '密碼不一樣'
        ]
      }
    }
  },

  methods: {
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  }
}

</script>
