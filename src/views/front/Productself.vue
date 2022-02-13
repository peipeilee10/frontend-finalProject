<template>
  <div id="productself" class="container">
    <v-row no-gutters>
      <v-col cols="4">
        <img :src="image" class="productimg" />
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
            <v-col>
              <v-text-field
                outlined
                type="number"
                label="數量"
                style="width: 500px"
                :rules="rules.quantityRules"
                v-model.number="quantity"
              ></v-text-field>
            </v-col>
            <v-col class="text-right">
              <v-btn class="addCart" @click="addCart">加入購物車</v-btn>
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
