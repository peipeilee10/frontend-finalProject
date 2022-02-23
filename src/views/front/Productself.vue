<template>
  <div id="productself" class="container">
    <v-row no-gutters>
      <v-col cols="12" lg="4">
        <div class="box">
          <img :src="image" class="productimg" />
        </div>
      </v-col>
      <v-col cols="12" lg="8" class="px-15">
        <v-row class="flex-column">
          <v-col>
            <v-row>
              <v-col cols="12" lg="9" class="productName">
                {{ name }}
              </v-col>
              <v-col cols="12" lg="3" class="productPrice text-right">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(price) }}
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="description" style="white-space: pre">
            {{ description }}
          </v-col>
          <v-row>
            <v-col cols="12" lg="6" class="quantitybtn">
              <v-btn @click="minus" color="grey lighten-1" class="white--text">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <h3 class="mx-10">
                {{ quantity }}
              </h3>

              <v-btn @click="plus" color="grey lighten-1" class="white--text">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>

            <v-col
              cols="12"
              lg="6"
              class="text-right flex-column align-end d-none d-lg-flex"
            >
              <v-btn
                color="orange darken-1"
                class="white--text"
                style="width: 100px"
                @click="addCart"
              >
                加入購物車
              </v-btn>
              <v-btn
                color="cyan darken-1"
                class="white--text mt-5 btn-1"
                style="width: 100px"
                to="/products"
              >
                繼續購物
              </v-btn>
            </v-col>

            <v-col
              cols="12"
              lg="6"
              class="text-right d-flex flex-column align-end d-lg-none mt-10"
            >
              <v-btn
                block
                color="orange darken-1"
                class="white--text"
                style="width: 100px"
                @click="addCart"
              >
                加入購物車
              </v-btn>
              <v-btn
                block
                color="cyan darken-1"
                class="white--text mt-5"
                style="width: 100px"
                to="/products"
              >
                繼續購物
              </v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        price: 0,
        description: '',
        image: '',
        sell: false,
        quantity: 1
      }
    },
    computed: {
      rules() {
        return {
          quantityRules: [
            v => !!v || '數量為必填欄位',
            v => (v && v >= 0) || '數量不得低於一個'
          ]
        }
      }
    },
    methods: {
      addCart() {
        if (this.user.token.length === 0) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '請先登入'
          })
          this.$router.push('/login')
        } else {
          this.$store.dispatch('user/addCart', {
            product: this.$route.params.id,
            quantity: this.quantity
          })
          console.log({
            product: this.$route.params.id,
            quantity: this.quantity
          })
        }
      },
      minus() {
        this.quantity--
      },
      plus() {
        this.quantity++
      }
    },
    async created() {
      try {
        const { data } = await this.api.get(
          '/products/' + this.$route.params.id
        )
        console.log(this.$route.params.id)
        this.name = data.result.name
        this.price = data.result.price
        this.description = data.result.description
        this.image = data.result.image
        this.sell = data.result.sell
        document.title = `${this.name} | Happy Shower`
      } catch (error) {
        this.$router.push('/')
      }
    }
  }
</script>
