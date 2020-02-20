import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
