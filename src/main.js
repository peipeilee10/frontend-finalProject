import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import mixin from './mixin.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import './style/all.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
// vue-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// vue-scroll-reveal
import VueScrollReveal from 'vue-scroll-reveal'
// swiper
import 'swiper/css/swiper.css'

// gtag
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-Z4ZBXHLTXQ' },
})

Vue.use(VueAwesomeSwiper)
Vue.mixin(mixin)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.component('Loading', Loading)
Vue.use(VueScrollReveal)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 600,
  scale: 1,
  distance: '10px',
  mobile: false
})
