import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap and dependencies
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(PortalVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
