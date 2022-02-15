<template>
  <div id="productself" class="container">
    <v-row no-gutters>
      <v-col cols="4">
        <div class="box">
          <img :src="image" class="productimg" />
        </div>
      </v-col>
      <v-col cols="8" class="px-15">
        <v-row class="flex-column">
          <v-col>
            <v-row>
              <v-col class="productName">{{ name }}</v-col>
              <v-col class="productPrice text-right">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(price) }}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="description">
            {{ description }}
          </v-col>
          <v-row>
            <v-col class="d-flex">
              <v-btn @click="minus" color="orange darken-1" class="white--text">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <h3 class="mx-10">
                {{ quantity }}
              </h3>

              <v-btn @click="plus" color="orange darken-1" class="white--text">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col class="text-right d-flex flex-column align-end">
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
        this.$store.dispatch('user/addCart', {
          product: this.$route.params.id,
          quantity: this.quantity
        })
        console.log({ product: this.$route.params.id, quantity: this.quantity })
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
