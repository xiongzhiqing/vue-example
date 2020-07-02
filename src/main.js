import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directives/resize'

import Message from '@/components/message/index.js'
import { init, bind } from '@/utils/customLifeCycle'
// 初始化生命周期函数，必须在Vue实例化之前确定合并策略
init()
Vue.use(Message)

Vue.config.productionTip = false

console.log(Vue.config.optionMergeStrategies)
const VM = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 将rootVm绑定到生命周期函数监听里面
bind(VM)