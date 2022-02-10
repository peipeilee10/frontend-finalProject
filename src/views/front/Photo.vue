<template>
  <div id="photos" class="container">
    <h1>毛孩寫真</h1>
    <v-row >
      <v-col cols="3" v-for="(photo,index) in photos" :key="index" style="height: 300px;">
        <img :src="photo.url">
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      photos: [
        { url: './img/photos/photos-1.jpg' },
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
  }
}

</script>
