<template>
  <div id="products">
    <v-row no-gutters>
      <!-- 分類 -->
      <v-col cols="3" class="mb-10 text-center d-flex flex-column align-center">
        <v-tab class="mb-5 item" @click="filter = ''">
          <v-icon class="mr-5 item">mdi-paw</v-icon>
          全部商品
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '毛孩飼料'">
          <v-icon class="mr-5 item">mdi-bone</v-icon>
          毛孩飼料
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '沐浴用品'">
          <v-icon class="mr-5 item">mdi-shower</v-icon>
          沐浴用品
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '毛孩玩具'">
          <v-icon class="mr-5 item">mdi-teddy-bear</v-icon>
          毛孩玩具
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '其他用品'">
          <v-icon class="mr-5 item">mdi-briefcase-outline</v-icon>
          其他用品
        </v-tab>
      </v-col>

      <!-- 商品 -->
      <v-col cols="7">
        <v-row>
          <v-col
            cols="6"
            md="3"
            v-for="product in filterItems"
            :key="product._id"
            class="productcol"
          >
            <productCard :product="product"></productCard>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
  import productCard from '../../components/productsCard.vue'

  export default {
    components: {
      productCard
    },
    data() {
      return {
        products: [],
        filter: ''
      }
    },
    computed: {
      filterItems() {
        return this.products.filter(item => {
          if (this.filter === '') return true
          return item.category === this.filter
        })
      }
    },
    async created() {
      try {
        const { data } = await this.api.get('/products')
        this.products = data.result
        // console.log(data)
        console.log(this.products)
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
