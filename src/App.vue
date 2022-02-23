<template>
  <v-app>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import VConsole from 'vconsole'

  const vConsole = new VConsole()
  export default {
    name: 'App',

    data: () => ({
      //
    })
  }
</script>
