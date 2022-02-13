<template>
  <div id="serviceitem">
    <h1 class="h1">寵物美容價格表</h1>
    <v-simple-table height="300px">
      <template v-slot:default>
        <thead class="cyan lighten-5">
          <tr>
            <th></th>
            <th class="text-center" style="font-size: 20px; font-weight: 500">
              小美容
            </th>
            <th class="text-center" style="font-size: 20px; font-weight: 500">
              大美容
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in service" :key="service.index">
            <td style="font-size: 18px; font-weight: 300">
              {{ service.item }}
            </td>
            <td style="font-size: 18px; font-weight: 300">
              {{ service.small }}
            </td>
            <td style="font-size: 18px; font-weight: 300">
              {{ service.large }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
      to="/appointment"
      class="servicebtn"
      color="orange darken-1 white--text mt-15"
    >
      立即預約
    </v-btn>
    <div class="serviceMemo">
      <p>小美容及大美容皆含 SPA 精油護理</p>
      <p>
        小美容：指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、小修剪足部、臉部腹部肛門雜毛
      </p>
      <p>大美容：指甲修剪、清理耳朵、腹部剃毛、擠肛門腺、全身造型修剪</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        service: [
          {
            item: '小型犬',
            small: '$800/1hr',
            large: '$1500/2hr'
          },
          {
            item: '中型犬',
            small: '$1200/1hr',
            large: '$2400/2hr'
          },
          {
            item: '大型犬',
            small: '$1600/2hr',
            large: '$3200/2.5hr'
          },
          {
            item: '短毛貓',
            small: '$1300/1hr',
            large: '$2500/2hr'
          },
          {
            item: '長毛貓',
            small: '$1600/1.5hr',
            large: '$2800/2hr'
          }
        ]
      }
    }
  }
</script>
