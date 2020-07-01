
// dispatch 会向上触发一个事件，同时传递要触发的祖先组件的名称与参数，当事件向上传递到对应的组件上时会触发组件上的时间侦听器，同时传播会停止。

/**
 * 向上传播事件
 *
 * @param {*} eventName 事件名称
 * @param {*} componentName 接收事件的组件名称
 * @param {*} params 传递的参数，可以有多个
 */
export default function dispatch (eventName, componentName, ...params) {
  console.log(eventName, componentName)
  // 如果没有$parent，则取$root
  let parent = this.$parent || this.$root
  while (parent) {
    // 组件的name存储在组件的options.componentName上面
    const name = parent.$options.name
    console.log(name, 'name===')
    // 如果接收事件的组件是当前组件
    if (name === componentName) {
      // 通过当前组件上面的$emit触发事件，同时传递事件名称与参数
      parent.$emit.apply(parent, [eventName, ...params])
      break
    } else {
      // 否则继续向上判断
      parent = parent.$parent
    }
  }
}

