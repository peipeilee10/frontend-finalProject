<template>
<div>
  <headers></headers>
  <router-view></router-view>
  <footers></footers>
</div>
</template>

<script>
import headers from '../../components/header.vue'
import footers from '../../components/footer.vue'

export default {
  components: {
    headers,
    footers
  }
}

</script>
