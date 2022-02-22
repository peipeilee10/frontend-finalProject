<template>
  <div id="appointment">
    <!-- 預約 -->
    <h1 class="h1 text-center">線上預約</h1>
    <v-row dense class="mt-15 mb-5 flex-column">
      <v-col>
        <v-row dense>
          <v-col cols="0" md="2"></v-col>
          <v-col cols="12" md="8">
            <!-- 卡片 -->
            <v-card class="appointmentcard">
              <v-row no-gutters class="appointmentcardrow">
                <!-- 圖片 -->
                <v-col cols="4" md="4" class="text-center hidden-md-and-down">
                  <v-img
                    class="petimage"
                    v-if="pet === '貓貓'"
                    src="../../assets/image/appointmentcat.jpg"
                    style="border-radius: 8px; height: 100%; object-fit: cover"
                  ></v-img>
                  <v-img
                    class="petimage"
                    v-if="pet === '狗狗'"
                    src="../../assets/image/appointment.jpg"
                    style="
                      border-radius: 8px;
                      height: 100%;
                      object-fit: contain;
                    "
                  ></v-img>
                </v-col>

                <!-- 選單 -->
                <v-col cols="12" md="8" class="pr-15 pl-5 pt-5">
                  <v-row>
                    <!-- 毛孩類別 -->
                    <v-col cols="12" md="6">
                      <div class="pet">
                        <div class="itemTitle">毛孩類別</div>
                        <v-btn
                          plain
                          text
                          outlined
                          @click="petSelected('貓貓')"
                          class="mr-2"
                          :class="{
                            select: pet === '貓貓'
                          }"
                        >
                          貓貓&nbsp;&nbsp;
                          <v-icon>mdi-cat</v-icon>
                        </v-btn>
                        <v-btn
                          plain
                          text
                          outlined
                          @click="petSelected('狗狗')"
                          class="mr-2"
                          :class="{
                            select: pet === '狗狗'
                          }"
                        >
                          狗狗&nbsp;&nbsp;
                          <v-icon>mdi-dog</v-icon>
                        </v-btn>
                      </div>
                    </v-col>

                    <!-- 預約日期 -->
                    <v-col cols="12" md="6">
                      <div class="date">
                        <span class="itemTitle">預約日期</span>
                        <v-col cols="12">
                          <v-menu
                            v-model="fromDateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                label="請選擇日期"
                                prepend-icon="mdi-calendar"
                                readonly
                                :value="appointment.date"
                                v-on="on"
                                required
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              locale="en-in"
                              v-model="appointment.date"
                              @input="fromDateMenu = false"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <!-- 毛孩類型 -->
                    <v-col cols="12" md="6">
                      <div class="pet-type">
                        <div class="itemTitle">毛孩類型</div>
                        <v-btn
                          v-if="pet === '狗狗'"
                          plain
                          text
                          outlined
                          @click="pettypeSelected('小型犬')"
                          class="mr-2"
                          :class="{
                            select: appointment.pettype === '小型犬'
                          }"
                        >
                          小型犬
                        </v-btn>

                        <v-btn
                          v-if="pet === '狗狗'"
                          plain
                          text
                          outlined
                          @click="pettypeSelected('中型犬')"
                          class="mr-2"
                          :class="{
                            select: appointment.pettype === '中型犬'
                          }"
                        >
                          中型犬
                        </v-btn>
                        <v-btn
                          v-if="pet === '狗狗'"
                          plain
                          text
                          outlined
                          @click="pettypeSelected('大型犬')"
                          class="mr-2"
                          :class="{
                            select: appointment.pettype === '大型犬'
                          }"
                        >
                          大型犬
                        </v-btn>
                        <v-btn
                          v-if="pet === '貓貓'"
                          plain
                          text
                          outlined
                          @click="pettypeSelected('長毛貓')"
                          class="mr-2"
                          :class="{
                            select: appointment.pettype === '長毛貓'
                          }"
                        >
                          長毛貓
                        </v-btn>
                        <v-btn
                          v-if="pet === '貓貓'"
                          plain
                          text
                          outlined
                          @click="pettypeSelected('短毛貓')"
                          class="mr-2"
                          :class="{
                            select: appointment.pettype === '短毛貓'
                          }"
                        >
                          短毛貓
                        </v-btn>
                      </div>
                    </v-col>

                    <!-- 預約時段 -->
                    <v-col cols="12" md="6">
                      <div class="booking-time">
                        <div class="itemTitle">預約時段</div>
                        <v-btn
                          plain
                          text
                          outlined
                          v-for="time in TimeRanges"
                          :key="time.index"
                          @click="timeSelected(time)"
                          :class="{ select: time === selected }"
                          class="mb-5 mr-1"
                        >
                          {{ time }}
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <!-- 服務項目 -->
                    <v-col cols="12" md="6">
                      <div class="serviceitem">
                        <div class="itemTitle">服務項目</div>
                        <v-btn
                          plain
                          text
                          outlined
                          @click="serviceSelected('小美容')"
                          class="mr-2"
                          :class="{
                            select: appointment.serviceitem === '小美容'
                          }"
                        >
                          小美容
                        </v-btn>

                        <v-btn
                          plain
                          text
                          outlined
                          @click="serviceSelected('大美容')"
                          :class="{
                            select: appointment.serviceitem === '大美容'
                          }"
                        >
                          大美容
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <span class="price">
                        <span
                          v-if="
                            appointment.serviceitem === '小美容' &&
                            appointment.pettype === '小型犬'
                          "
                        >
                          $ 800 / 1hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '小美容' &&
                            appointment.pettype === '中型犬'
                          "
                        >
                          $ 1,200 / 1hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '小美容' &&
                            appointment.pettype === '大型犬'
                          "
                        >
                          $ 1,600 / 1hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '大美容' &&
                            appointment.pettype === '小型犬'
                          "
                        >
                          $ 1,500 / 2hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '大美容' &&
                            appointment.pettype === '中型犬'
                          "
                        >
                          $ 2,400 / 2hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '大美容' &&
                            appointment.pettype === '大型犬'
                          "
                        >
                          $ 3,200 / 2.5hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '小美容' &&
                            appointment.pettype === '短毛貓'
                          "
                        >
                          $ 1,300 / 1hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '小美容' &&
                            appointment.pettype === '長毛貓'
                          "
                        >
                          $ 1,600 / 1.5hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '大美容' &&
                            appointment.pettype === '短毛貓'
                          "
                        >
                          $ 2,500 / 2hr
                        </span>
                        <span
                          v-if="
                            appointment.serviceitem === '大美容' &&
                            appointment.pettype === '長毛貓'
                          "
                        >
                          $ 2,800 / 2hr
                        </span>
                      </span>
                      <p
                        v-if="appointment.serviceitem === '小美容'"
                        class="mt-5"
                      >
                        指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
                      </p>
                      <p v-else class="mt-5">
                        指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、 全身造型修剪
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <!-- 按鈕 -->
                    <v-col cols="12">
                      <div class="text-center my-10">
                        <v-btn
                          class="orange darken-1 white--text"
                          depressed
                          height="40"
                          @click="gotoappointment"
                        >
                          前往預約
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="0" md="2"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fromDateMenu: false,
        tab: null,
        pet: '貓貓',
        TimeRanges: [
          '11:30',
          '12:30',
          '13:30',
          '14:30',
          '15:30',
          '16:30',
          '17:30',
          '18:30'
        ],
        selected: false,
        appointment: {
          serviceitem: '小美容',
          pettype: '短毛貓',
          date: '',
          time: '11:30'
        }
      }
    },
    methods: {
      gotoappointment() {
        if (this.user.token.length === 0) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '請先登入'
          })
          this.$router.push('/login')
        } else {
          this.$store.commit('user/appointment', this.appointment)
          console.log(this.appointment)
          this.$router.push('/appointmentCheckout')
        }
      },
      timeSelected(time) {
        this.selected = time
        this.appointment.time = time
      },
      serviceSelected(item) {
        // this.selected = item
        this.appointment.serviceitem = item
      },
      pettypeSelected(pettype) {
        this.appointment.pettype = pettype
      },
      petSelected(pet) {
        this.pet = pet
      }
    }
  }
</script>
