import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directives/resize'

import Message from '@/components/message/index.js'

Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
