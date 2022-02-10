<template>
  <div id="appointment">
    <v-tabs v-model="tab" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab1">
        狗狗
        <v-icon>mdi-dog</v-icon>
      </v-tab>

      <v-tab href="#tab2">
        貓貓
        <v-icon>mdi-cat</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab1">
        <v-row dense class="mt-15 mb-5">
          <v-col col="3"></v-col>
          <v-col cols="3">
            <v-card class="d-flex" max-width="400">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-img
                    height="250"
                    max-width="400"
                    src="../../assets/image/photoright.jpg"
                  ></v-img>

                  <v-card-title class="text-h5">小美容</v-card-title>
                  <v-card-subtitle>
                    指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
                  </v-card-subtitle>

                  <v-card-subtitle>毛孩類型</v-card-subtitle>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>小型犬</v-chip>
                    <v-chip>中型犬</v-chip>
                    <v-chip>大型犬</v-chip>
                  </v-chip-group>

                  <v-divider></v-divider>

                  <v-card-subtitle>預約時段</v-card-subtitle>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>11:30</v-chip>
                    <v-chip>12:30</v-chip>
                    <v-chip>13:30</v-chip>
                    <v-chip>14:30</v-chip>
                    <v-chip>15:30</v-chip>
                    <v-chip>16:30</v-chip>
                    <v-chip>17:30</v-chip>
                    <v-chip>18:30</v-chip>
                  </v-chip-group>

                  <v-divider></v-divider>
                  <v-card-subtitle>時間:1hr</v-card-subtitle>
                  <v-card-subtitle>費用:$1,200</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="d-flex" max-width="400">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-img
                    height="250"
                    max-width="400"
                    src="../../assets/image/photoright.jpg"
                  ></v-img>

                  <v-card-title class="text-h5">小美容</v-card-title>
                  <v-card-subtitle>
                    指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
                  </v-card-subtitle>

                  <v-card-subtitle>毛孩類型</v-card-subtitle>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>小型犬</v-chip>
                    <v-chip>中型犬</v-chip>
                    <v-chip>大型犬</v-chip>
                  </v-chip-group>

                  <v-divider></v-divider>

                  <v-card-subtitle>預約時段</v-card-subtitle>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>11:30</v-chip>
                    <v-chip>12:30</v-chip>
                    <v-chip>13:30</v-chip>
                    <v-chip>14:30</v-chip>
                    <v-chip>15:30</v-chip>
                    <v-chip>16:30</v-chip>
                    <v-chip>17:30</v-chip>
                    <v-chip>18:30</v-chip>
                  </v-chip-group>

                  <v-divider></v-divider>
                  <v-card-subtitle>時間:1hr</v-card-subtitle>
                  <v-card-subtitle>費用:$1,200</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col col="3"></v-col>
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        loading: false,
        selection: 1,
        items: [
          {
            color: '#1F7087',
            src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            title: 'Supermodel',
            artist: 'Foster the People'
          },
          {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist: 'Ellie Goulding'
          }
        ]
      }
    }
  }
</script>
