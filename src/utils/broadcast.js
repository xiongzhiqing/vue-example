// broadcast 会向所有的后代组件传播一个事件，同时传递要触发的后代组件的名称与参数，当事件传递到对应的后代组件时，会触发组件上的事件侦听器，同时传播会停止(因为是向下传递是树形的，所以只会停止其中一个叶子分支的传递)

/**
 * 向下传播事件
 *
 * @export
 * @param {*} eventName 事件名称
 * @param {*} componentName 要触发事件的组件名称
 * @param {*} params  传递的参数
 */
export default function broadcast (eventName, componentName, ...params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    if (name === componentName) {
      child.$emit.apply(child, [eventName, ...params])
    } else {
      broadcast.apply(child, [eventName, componentName, ...params])
    }
  })
}