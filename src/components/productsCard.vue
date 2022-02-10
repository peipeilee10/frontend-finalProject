<template>
<v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        id="productsCard"
        class="mx-auto"
        max-width="344"
      >
        <v-img :src="product.image" height="300"></v-img>

        <v-card-title>
          <div class="productName" >{{product.name}}</div>
        </v-card-title>

        <v-card-title>
          <div class="productPrice">$&nbsp;{{new Intl.NumberFormat('en-IN').format(product.price) }}</div>
        </v-card-title>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          <router-link :to='"/product/" + product._id'>
            <v-btn class="go-btn">商品詳情</v-btn>
          </router-link>

          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  data () {
    return {
      overlay: false
    }
  },
  props: {
    product: {
      type: Object,
      require: true,
      default () {
        return {
          description: '',
          name: '',
          image: '',
          price: '',
          sell: false
        }
      }
    }
  }
}
</script>
