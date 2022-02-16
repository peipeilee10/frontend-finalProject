<template>
  <div id="photos" class="container">
    <h1 class="h1 text-center mb-3">
      流浪動物認養
      <v-icon color="#1D5452" large>mdi-paw</v-icon>
    </h1>
    <div class="text-center" style="color: #1d5452">
      <p>領養代替購買</p>
      <p>讓我們為浪浪找一個家</p>
    </div>
    <v-row>
      <v-col cols="3" v-for="info in adoptInfo" :key="info.index">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="info.album_file" height="350"></v-img>

          <v-chip-group class="pl-2 pt-2">
            <v-chip color="orange lighten-1" text-color="white">
              {{ info.animal_kind }}
            </v-chip>
            <v-chip color="orange lighten-1" text-color="white">
              {{ info.animal_colour }}
            </v-chip>
            <v-chip color="orange lighten-1" text-color="white">
              {{ info.animal_bodytype }}
            </v-chip>
          </v-chip-group>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>更多訊息</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>
                {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <p>收容所：{{ info.shelter_name }}</p>
                <p>電話：{{ info.shelter_tel }}</p>
                <p>地址:{{ info.shelter_address }}</p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        adoptInfo: [],
        page: 1,
        show: false
      }
    },

    async created() {
      try {
        const { data } = await axios.get(
          'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
        )

        const adoptfilter = data.filter(function (item) {
          if (item.album_file === '') {
            return false
          }
          return item.animal_area_pkid === 3
        })

        this.adoptInfo = adoptfilter

        console.log(this.adoptInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>
