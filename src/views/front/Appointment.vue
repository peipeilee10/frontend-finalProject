<template>
  <div id="appointment">
    <!-- 預約 -->
    <v-row dense class="mt-15 mb-5 flex-column">
      <v-col>
        <v-row dense>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <!-- 卡片 -->
            <v-card class="appointmentcard">
              <v-row no-gutters>
                <!-- 圖片 -->
                <v-col cols="4" class="text-center">
                  <v-avatar class="ma-10" size="300" tile>
                    <v-img
                      v-if="pet === '貓貓'"
                      src="../../assets/image/appointmentcat.jpg"
                      style="border-radius: 10px"
                    ></v-img>
                    <v-img
                      v-if="pet === '狗狗'"
                      src="../../assets/image/appointment.jpg"
                      style="border-radius: 10px"
                    ></v-img>
                  </v-avatar>
                </v-col>

                <!-- 選單 -->
                <v-col cols="8" class="pr-15 pl-5 pt-5">
                  <v-row>
                    <!-- 毛孩類別 -->
                    <v-col cols="6">
                      <div class="pet">
                        <span class="itemTitle">毛孩類別</span>
                        <v-chip-group
                          v-model="pet"
                          active-class="orange darken-1 white--text "
                        >
                          <v-chip label large :ripple="false" value="貓貓">
                            貓貓 &nbsp;&nbsp;
                            <v-icon>mdi-cat</v-icon>
                          </v-chip>
                          <v-chip label large :ripple="false" value="狗狗">
                            狗狗&nbsp;&nbsp;
                            <v-icon>mdi-dog</v-icon>
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-col>

                    <!-- 毛孩類型 -->
                    <v-col cols="6">
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
                    <!-- 服務項目 -->
                    <v-col cols="6">
                      <div class="pet-type">
                        <span class="itemTitle">毛孩類型</span>
                        <v-chip-group
                          v-model="appointment.pettype"
                          active-class="orange darken-1 white--text"
                        >
                          <v-chip
                            large
                            v-if="pet === '狗狗'"
                            label
                            value="小型犬"
                          >
                            小型犬
                          </v-chip>

                          <v-chip
                            large
                            v-if="pet === '狗狗'"
                            label
                            value="中型犬"
                          >
                            中型犬
                          </v-chip>
                          <v-chip
                            large
                            v-if="pet === '狗狗'"
                            label
                            value="大型犬"
                          >
                            大型犬
                          </v-chip>
                          <v-chip
                            large
                            v-if="pet === '貓貓'"
                            label
                            value="長毛貓"
                          >
                            長毛貓
                          </v-chip>
                          <v-chip
                            large
                            v-if="pet === '貓貓'"
                            label
                            value="短毛貓"
                          >
                            短毛貓
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-col>

                    <!-- 價錢&服務細項 -->
                    <v-col cols="6">
                      <div class="booking-time">
                        <span class="itemTitle">預約時段</span>
                        <v-chip-group
                          v-model="appointment.time"
                          active-class="orange darken-1 white--text"
                        >
                          <v-chip value="11:30">11:30</v-chip>
                          <v-chip value="12:30">12:30</v-chip>
                          <v-chip value="13:30">13:30</v-chip>
                          <v-chip value="14:30">14:30</v-chip>
                          <v-chip value="15:30">15:30</v-chip>
                          <v-chip value="16:30">16:30</v-chip>
                          <v-chip value="17:30">17:30</v-chip>
                          <v-chip value="18:30">18:30</v-chip>
                        </v-chip-group>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="serviceitem">
                        <span class="itemTitle">服務項目</span>
                        <v-chip-group
                          v-model="appointment.serviceitem"
                          active-class="orange darken-1 white--text "
                        >
                          <v-chip label large :ripple="false" value="小美容">
                            小美容
                          </v-chip>
                          <v-chip label large :ripple="false" value="大美容">
                            大美容
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-col>
                    <v-col cols="6">
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
                    <!-- 預約日期 -->
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
                    <!-- 預約時段 -->
                    <!-- <v-col cols="6"></v-col> -->
                  </v-row>
                </v-col>
              </v-row>

              <!-- 價錢 -->
              <!-- <span class="price">
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
              </span> -->
            </v-card>
          </v-col>
          <v-col cols="2"></v-col>
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
      }
    }
  }
</script>
