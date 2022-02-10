<template>
  <div  id="products" class="container">
    <v-row no-gutters>
      <v-col cols="4" v-for="product in products" :key="product._id">
        <productCard :product="product"></productCard>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import productCard from '../../components/productsCard.vue'

export default {
  components: {
    productCard
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
      // console.log(data)
      // console.log(this.products)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
