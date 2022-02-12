<template>
<div id="adminOrders" class="container">
  <v-data-table
    :headers="headers"
    :items="orders"
    :single-expand="singleExpand"
    item-key="name"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <h1>會員訂單</h1>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>

    <template v-slot:item._id="{ item }">
      {{item._id}}
    </template>

    <template v-slot:item.date="{ item }">
      {{ new Date(item.date).toLocaleString('zh-tw') }}
    </template>

    <template v-slot:item.orderproducts="{ item }">
      <ul>
        <li v-for="i in item.products" :key="i._id">
          {{i.product.name}}/{{i.quantity}}個
        </li>
      </ul>
    </template>

    <template v-slot:item.totalprice="{ item }">
    <!-- {{item}} -->
      <p>{{ sumPrice(item.products) }}</p>
    </template>

    <template v-slot:item.pickupway="{ item }">
      {{item.user.pickupway}}
    </template>

    <template v-slot:item.pay="{ item }">
      {{item.user.pay}}
    </template>

    <template v-slot:expanded-item="{ headers, item }">
    <!-- {{item}} -->
      <td :colspan="headers.length">
        訂購人姓名:{{item.user.name}}<br>
        訂購人信箱:{{item.user.email}}<br>
        訂購人電話:{{item.user.phone}}<br>
        訂購人地址:{{item.user.address}}<br>
        備註事項:{{item.user.memo}}
      </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      singleExpand: false,
      headers: [
        { text: '訂單編號', value: '_id' },
        { text: '購買日期', value: 'date' },
        { text: '購買商品', value: 'orderproducts' },
        { text: '總金額', value: 'totalprice' },
        { text: '取貨方式', value: 'pickupway' },
        { text: '付款方式', value: 'pay' },
      ]
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
  async created() {
    try {
      const { data } = await this.api.get('/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
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
