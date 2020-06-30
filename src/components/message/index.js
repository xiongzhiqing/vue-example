/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-30 11:09:18
 * @Last Modified by:   xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-30 11:09:18
 * 手动挂载组件 init
 */
import Vue from 'vue'
import Index from './index.vue'

let messageInstance = null
let MessageConstructor = Vue.extend(Index)

const init = () => {
  messageInstance = new MessageConstructor()
  messageInstance.$mount()
  document.body.appendChild(messageInstance.$el)
}

const caller = (options) => {
  if (!messageInstance) {
    init()
  }
  messageInstance.add(options)
}

export default {
  // 返回 install 函数 用于 Vue.use 注册
  install (vue) {
    vue.prototype.$message = caller
  }
}