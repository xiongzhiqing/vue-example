/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-29 14:39:55
 * @Last Modified by: xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-30 08:57:05
 */

import Vue from 'vue'
const win = window

Vue.directive('resize', {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind (el, binding, vnode, oldVnode) {
    console.log(el, binding, vnode, oldVnode, 'bind')
  },
  // 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）。
  inserted (el, binding) {
    // el: 指令所绑定的元素，可以用来直接操作 DOM。

    // binding：一个对象，包含一下property：
    // const { name, value, oldValue, expression, arg, modifiers } = binding
    // ↳ name: 指令名，不包括 v- 前缀
    // ↳ value：指令的绑定值，例如 v-resize="1 + 1" 中，绑定值为 2
    // ↳ oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用
    // ↳ expression：字符串形式的指令表达式。例如 v-resize="1+1"中，表达式为 “1+1”
    // ↳ arg：传给指令的参数，可选。例如 v-resize:foo 中，参数为 “foo”
    // ↳ modifiers：一个包含修饰符的对象。例如 v-resize.foo.bar 中，修饰符对象为 {foo: true, bar: true}

    // vnode：Vue编译生成的虚拟节点。

    // oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

    // console.log(name, value, oldValue, expression, arg, modifiers, 'inserted', el.attributes.numberLength)

    const { value: callback, arg: direction, modifiers } = binding
    console.log(direction)

    const result = () => {
      return direction === 'vertical' ? win.innerHeight : win.innerWidth
    }

    win.addEventListener('resize', () => callback(result()))


    if (!modifiers || !modifiers.quiet) {
      callback(result())
    }
    el._onResize = callback
  },
  // 所有组件的VNode更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生改变，也可能没有。但是可以通过比较更新前后的值来忽略不必要的模板更新。
  update (el, binding, vnode, oldVnode) {
    console.log(el, binding, vnode, oldVnode, 'update')
  },
  // 指令所在组件的VNode及其子VNode全部更新后调用。
  componentUpdated (el, binding, vnode, oldVnode) {
    console.log(el, binding, vnode, oldVnode, 'componentUpdated')
  },
  // 只调用一次，指令与元素解绑时调用。
  unbind (el, binding, vnode, oldVnode) {
    if (!el._onResize) return
    win.removeEventListener('resize', el._onResize)

    delete el._onResize
    console.log(el, binding, vnode, oldVnode, 'unbind')
  }
})
