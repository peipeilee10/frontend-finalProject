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

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.mixin(mixin)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
