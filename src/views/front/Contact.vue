<template>
  <div id="contactus" class="container">
    <h1 class="h1">聯絡我們</h1>
    <p class="text-center mb-10">
      洗澡趣寵物美容重視您的意見，若您有任何疑問，可以在此處留下問題
      <br />
      亦可於上班時間聯絡客服人員，我們將竭誠為您服務。
    </p>

    <v-row>
      <v-col>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.184212395652!2d121.50258431529059!3d24.99385574605288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680277189b1b6b%3A0x569614ee54a47641!2z5o236YGL5pmv5a6J56uZ!5e0!3m2!1szh-TW!2stw!4v1644739185381!5m2!1szh-TW!2stw"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col>
        <v-form>
          <v-row>
            <v-col cols="6">
              <v-text-field solo label="姓名" clearable></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field solo label="主旨" clearable></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field solo label="電子郵件" clearable></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field solo label="電話" clearable></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea solo name="input-7-4" label="訊息內容"></v-textarea>
            </v-col>
            <v-btn block color="#00ACC1" class="white--text">確認送出</v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
