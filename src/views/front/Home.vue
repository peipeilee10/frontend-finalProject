<template>
<div>
<!-- carousel -->
  <homecarousel></homecarousel>
<!-- 介紹 -->
  <about></about>
<!-- 服務流程 -->
  <service></service>
<!-- 團隊介紹 -->
  <team></team>
<!-- 環境介紹 -->
  <enviroment></enviroment>
<!-- 照片區 -->
  <homephotos></homephotos>

</div>

</template>

<script>
import homecarousel from '../../components/home/homecarousel.vue'
import about from '../../components/home/about.vue'
import service from '../../components/home/service.vue'
import team from '../../components/home/team.vue'
import enviroment from '../../components/home/enviroment.vue'
import homephotos from '../../components/home/homephotos.vue'
export default {
  components: {
    homecarousel,
    about,
    service,
    team,
    enviroment,
    homephotos
  }

}

</script>
