/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-07-01 15:58:42
 * @Last Modified by: xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-07-01 17:30:15
 * 自定义生命周期钩子函数
 * 定义生命周期函数 pageHidden 和 pageVisible
 */
import Vue from 'vue'

const win = window
const doc = document
// 通知所有组件页面状态发生了变化
const notifyVisibilityChange = (lifeCycleName, vm) => {
  // 生命周期函数会存在$options中，通过$options[lifeCycleName]获取生命周期
  const lifeCycles = vm.$options[lifeCycleName]
  // 因使用created合并策略，所以lifeCycles是一个数组
  if (lifeCycles && lifeCycles.length) {
    // 遍历 lifeCycleName 对应的生命周期函数列表，依次执行
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm)
    })
  }

  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyVisibilityChange(lifeCycleName, child)
    })
  }
}
/**
 * 添加生命周期钩子函数
 * @export
 */
export function init () {
  const optionMergeStrategies = Vue.config.optionMergeStrategies
  /**
   * 定义两个生命周期函数 pageVisible，pageHidden
   * 为什么要赋值为 optionMergeStrategies.create呢
   * 这个相当于指定 pageVisible， pageHidden 的合并策略与created的相同（其他生命周期函数都一样）
  */
  optionMergeStrategies.pageVisible = optionMergeStrategies.beforeCreate
  optionMergeStrategies.pageHidden = optionMergeStrategies.created
}

export function bind (rootVm) {
  win.addEventListener('visibilitychange', () => {
    console.log('visibilitychange', doc.visibilityState)
    // 判断调用哪个生命周期函数
    let lifeCycleName = undefined
    if (doc.visibilityState === 'hidden') {
      lifeCycleName = 'pageHidden'
    } else if (doc.visibilityState === 'visible') {
      lifeCycleName = 'pageVisible'
    }

    if (lifeCycleName) {
      console.log(lifeCycleName, 'lifeCycleName')
      // 通知所有组件生命周期发生变化了
      notifyVisibilityChange(lifeCycleName, rootVm)
    }
  })
}
