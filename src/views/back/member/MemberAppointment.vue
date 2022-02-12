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

    <template v-slot:item.petbreed="{ item }">
      {{item}}
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
        { text: '毛孩品種', value: 'petbreed' },
      ]
    }
  },

  async created() {
    try {
      console.log(this.user)
      const { data } = await this.api.get('/appointments/myappointment', {
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
