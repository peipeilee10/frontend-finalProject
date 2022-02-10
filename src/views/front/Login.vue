<template>
<div id="login">
  <h1 class="text-center ">洗澡趣 會員登入</h1>
  <div class="box">
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="login"
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

    <div class="btn-wrap">
      <v-btn
        color="cyan darken-1 white--text"
        class="mr-4 mt-10"
        to="/register"
      >
        前往註冊
      </v-btn>

      <v-btn
        :disabled="!valid"
        color="orange cyan darken-1 white--text"
        class="mr-4 mt-10"
        type="submit"
      >
        登入
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
        ]
      }
    }
  },

  methods: {
    login () {
      this.$store.dispatch('user/login', this.form)
      console.log(this.form)
    }
  }
}
</script>
