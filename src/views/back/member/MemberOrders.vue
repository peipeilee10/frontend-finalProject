<template>
  <div id="memberOrders">
    <h1 class="mb-15 text-center">您的訂單</h1>
    <v-data-table :headers="headers" :items="orders">
    <template v-slot:item._id="{ item }">
    <!-- {{item}} -->
      {{item._id}}
    </template>
    <template v-slot:item.orderproducts="{ item }">
    <!-- {{item}} -->
      <ul>
        <li v-for="i in item.products" :key="i._id">
          {{i.product.name}}/{{i.quantity}}個
        </li>
      </ul>
    </template>
    <template v-slot:item.date="{ item }">
      {{ new Date(item.date).toLocaleString('zh-tw') }}
    </template>
    <template  v-slot:item.totalprice="{ item }">
    <!-- {{item}} -->
      <!-- <p v-for="i in item.products" :key="i._id">
      {{new Intl.NumberFormat('en-IN').format(i.quantity * i.product.price)}}
      </p> -->
      <p>{{ sumPrice(item.products) }}</p>
    </template>
    <template  v-slot:item.pickupway="{ item }">
    <!-- {{item}} -->
      {{item.user.pickupway}}
    </template>
    <template  v-slot:item.pay="{ item }">
    <!-- {{item}} -->
      {{item.user.pay}}
    </template>
  </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '訂單編號', value: '_id' },
        { text: '購買日期', value: 'date' },
        { text: '購買商品', value: 'orderproducts' },
        { text: '總金額', value: 'totalprice' },
        { text: '取貨方式', value: 'pickupway' },
        { text: '付款方式', value: 'pay' },
      ],
      orders: [],
      total: 0
    }
  },
  methods: {
    sumPrice (products) {
      const result = products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)

      return new Intl.NumberFormat('en-IN').format(result)
    }
  },
  async created () {
    try {
      console.log(this.user._id)
      console.log(this.user)
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      console.log(data)
      this.orders = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
