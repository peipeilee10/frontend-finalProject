<template>
  <div id="photos" class="container">
    <h1>
      https://data.gov.tw/dataset/85903
      毛孩寫真
      <v-icon color="#1D5452" large>mdi-paw</v-icon>
    </h1>
    <v-row>
      <v-col
        cols="3"
        v-for="(photo, index) in photos"
        :key="index"
        :data-index="index"
        style="height: 300px"
      >
        <img @click="open($event)" :src="photo.url" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import fancyBox from 'vue-fancybox'
  export default {
    data() {
      return {
        photos: [
          { width: 200, height: 200, url: './img/photos/photos-1.jpg' },
          { url: './img/photos/photos (2).jpg' },
          { url: './img/photos/photos (3).jpg' },
          { url: './img/photos/photos (4).jpg' },
          { url: './img/photos/photos (5).jpg' },
          { url: './img/photos/photos (6).jpg' },
          { url: './img/photos/photos (7).jpg' },
          { url: './img/photos/photos (8).jpg' },
          { url: './img/photos/photos (9).jpg' },
          { url: './img/photos/photos (10).jpg' },
          { url: './img/photos/photos (11).jpg' },
          { url: './img/photos/photos (12).jpg' }
        ]
      }
    },
    methods: {
      open(e) {
        fancyBox(e.target, this.photos)
        console.log(this.photos)
        console.log(e)
      }
    }

  }
</script>
