<template>
  <div id="appointment">
    <v-tabs v-model="tab" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#dog">
        狗狗
        <v-icon>mdi-dog</v-icon>
      </v-tab>

      <v-tab href="#cat">
        貓貓
        <v-icon>mdi-cat</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- 狗狗預約 -->
      <v-tab-item value="dog">
        <v-row dense class="mt-15 mb-5 flex-column">
          <v-col>
            <v-row dense>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <!-- 卡片 -->
                <v-card max-width="1200" class="appointmentcard">
                  <v-row no-gutters>
                    <v-col cols="4" class="text-center">
                      <v-avatar class="ma-10" size="300" tile>
                        <v-img
                          src="../../assets/image/appointment.jpg"
                          style="border-radius: 10px"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" class="pr-15 pl-5 pt-5">
                      <div class="item-title">
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
                        <p v-if="appointment.serviceitem === '小美容'">
                          指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
                        </p>
                        <p v-else>
                          指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、 全身造型修剪
                        </p>
                      </div>

                      <div class="pet-type">
                        <span class="item-title">毛孩類型</span>
                        <v-chip-group
                          v-model="appointment.pettype"
                          active-class="orange darken-1 accent-4 white--text"
                        >
                          <v-chip label value="小型犬">小型犬</v-chip>
                          <v-chip label value="中型犬">中型犬</v-chip>
                          <v-chip label value="大型犬">大型犬</v-chip>
                        </v-chip-group>
                      </div>

                      <v-divider class="py-2"></v-divider>

                      <div class="booking-time">
                        <span class="item-title">預約時段</span>
                        <v-chip-group
                          v-model="appointment.time"
                          active-class="orange darken-1 accent-4 white--text"
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
                  <!-- 價錢 -->
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
                  </span>
                </v-card>
                <div class="text-center my-6">
                  <v-btn
                    class="orange darken-1 white--text"
                    depressed
                    @click="gotobooking"
                  >
                    前往預約
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- 貓咪預約 -->
      <v-tab-item value="cat">
        <v-row dense class="mt-15 mb-5 flex-column">
          <v-col>
            <v-row dense>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <!-- 卡片 -->
                <v-card max-width="1200" class="appointmentcard">
                  <v-row no-gutters>
                    <v-col cols="4" class="text-center">
                      <v-avatar class="ma-10" size="300" tile>
                        <v-img
                          src="../../assets/image/appointmentcat.jpg"
                          style="border-radius: 10px"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" class="pr-15 pl-5 pt-5">
                      <div class="item-title">
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
                        <p v-if="appointment.serviceitem === '小美容'">
                          指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
                        </p>
                        <p v-else>
                          指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、 全身造型修剪
                        </p>
                      </div>

                      <div class="pet-type">
                        <span class="item-title">毛孩類型</span>
                        <v-chip-group
                          v-model="appointment.pettype"
                          active-class="orange darken-1 accent-4 white--text"
                        >
                          <v-chip label value="長毛">長毛</v-chip>
                          <v-chip label value="短毛">短毛</v-chip>
                        </v-chip-group>
                      </div>

                      <v-divider class="py-2"></v-divider>

                      <div class="booking-time">
                        <span class="item-title">預約時段</span>
                        <v-chip-group
                          v-model="appointment.time"
                          active-class="orange darken-1 accent-4 white--text"
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
                  <!-- 價錢 -->
                  <span class="price">
                    <span
                      v-if="
                        appointment.serviceitem === '小美容' &&
                        appointment.pettype === '短毛'
                      "
                    >
                      $ 1,300 / 1hr
                    </span>
                    <span
                      v-if="
                        appointment.serviceitem === '小美容' &&
                        appointment.pettype === '長毛'
                      "
                    >
                      $ 1,600 / 1.5hr
                    </span>
                    <span
                      v-if="
                        appointment.serviceitem === '大美容' &&
                        appointment.pettype === '短毛'
                      "
                    >
                      $ 2,500 / 2hr
                    </span>
                    <span
                      v-if="
                        appointment.serviceitem === '大美容' &&
                        appointment.pettype === '長毛'
                      "
                    >
                      $ 2,800 / 2hr
                    </span>
                  </span>
                </v-card>
                <div class="text-center my-6">
                  <v-btn
                    class="orange darken-1 white--text"
                    depressed
                    @click="gotobooking"
                  >
                    前往預約
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        appointment: {
          serviceitem: '小美容',
          pettype: '小型犬',
          time: '11:30'
        }
      }
    },
    methods: {
      gotobooking() {
        this.$store.commit('user/appointment', this.appointment)
        console.log(this.appointment)
        this.$router.push('/appointmentCheckout')
      }
    }
  }
</script>
