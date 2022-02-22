<template>
  <div id="products">
    <p class="mb-10 ml-6 hidden-sm-and-up">商品分類</p>
    <v-row no-gutters class="productrow">
      <!-- 分類 -->
      <v-col
        cols="12"
        md="3"
        class="mb-10 text-center d-flex flex-column align-center bc"
      >
        <p class="itemtitle hidden-md-and-down">商品分類</p>

        <v-tab class="mb-5 item" @click="filter = ''">
          <v-icon class="mr-5 item hidden-md-and-down" large>mdi-paw</v-icon>
          全部商品
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '毛孩飼料'">
          <v-icon class="mr-5 item hidden-md-and-down" large>mdi-bone</v-icon>
          毛孩飼料
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '沐浴用品'">
          <v-icon class="mr-5 item hidden-md-and-down" large>mdi-shower</v-icon>
          沐浴用品
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '毛孩玩具'">
          <v-icon class="mr-5 item hidden-md-and-down" large>
            mdi-teddy-bear
          </v-icon>
          毛孩玩具
        </v-tab>
        <v-tab class="mb-5 item" @click="filter = '其他用品'">
          <v-icon class="mr-5 item hidden-md-and-down" large>
            mdi-briefcase-outline
          </v-icon>
          其他用品
        </v-tab>
      </v-col>

      <!-- 商品 -->
      <v-col cols="12" md="7">
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
      <v-col cols="2"></v-col>
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
