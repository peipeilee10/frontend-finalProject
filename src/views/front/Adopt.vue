<template>
  <div id="photos">
    <loading :active.sync="isLoading" color="#fb8c00"></loading>
    <h1 class="h1 text-center mb-3">
      流浪動物認養
      <v-icon color="#1D5452" large>mdi-paw</v-icon>
    </h1>
    <div class="text-center text mb-10">
      <p class="text">
        領養代替購買
        <br />
        讓我們為浪浪找一個家
      </p>
    </div>
    <v-row>
      <v-col cols="2">
        <!-- 分類 -->
        <v-tab class="mb-5 item" @click="petitem('狗')">
          <v-icon class="mr-5 item" large>mdi-dog-side</v-icon>
          狗狗
        </v-tab>
        <v-tab class="mb-5 item" @click="petitem('貓')">
          <v-icon class="mr-5 item" large>mdi-cat</v-icon>
          貓咪
        </v-tab>
        <v-tab class="mb-5 item" @click="petitem('MEDIUM')">
          <v-icon class="mr-5 item" large>mdi-alpha-m-circle</v-icon>
          中型
        </v-tab>
        <v-tab class="mb-5 item" @click="petitem('SMALL')">
          <v-icon class="mr-5 item" large>mdi-alpha-s-circle</v-icon>
          小型
        </v-tab>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6" md="3" v-for="info in sliceitems" :key="info.index">
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

              <v-spacer></v-spacer>
              <v-card-text>
                <p>
                  收容所：{{ info.shelter_name }}
                  <br />
                  電話&nbsp;&nbsp;&nbsp;&nbsp;：{{ info.shelter_tel }}
                  <br />
                  編號&nbsp;&nbsp;&nbsp;&nbsp;：{{ info.animal_subid }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="text-center mt-15">
      <v-pagination
        v-model="page"
        :length="Math.ceil(filterItems.length / 20)"
        @input="top"
        total-visible="5"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        adoptInfo: [],
        filter: '狗',
        page: 1,
        show: false,
        isLoading: false
      }
    },
    computed: {
      filterItems() {
        return this.adoptInfo.filter(item => {
          if (this.filter === '狗') {
            return item.animal_kind === this.filter
          }
          if (this.filter === '貓') {
            return item.animal_kind === this.filter
          }
          if (this.filter === 'MEDIUM') {
            return item.animal_bodytype === 'MEDIUM'
          }
          if (this.filter === 'SMALL') {
            return item.animal_bodytype === 'SMALL'
          }
        })
      },
      sliceitems() {
        return this.filterItems.slice(
          (this.page - 1) * 20,
          (this.page - 1) * 20 + 20
        )
      }
    },
    methods: {
      petitem(pet) {
        this.filter = pet
        this.page = 1
        this.top()
      },
      top() {
        window.scrollTo({ top: 0 })
      }
    },
    async created() {
      try {
        this.isLoading = true
        const { data } = await axios.get(
          'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
        )

        const adoptfilter = data.filter(function (item) {
          if (item.album_file === '') {
            return false
          }
          return (
            item.animal_area_pkid === 3 &&
            (item.shelter_name.includes('板橋區') ||
              item.shelter_name.includes('五股區') ||
              item.shelter_name.includes('淡水區'))
          )
        })
        this.isLoading = false
        this.adoptInfo = adoptfilter
        console.log(this.adoptInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>
