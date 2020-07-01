import dispatch from '@/utils/dispatch'
import broadcast from '@/utils/broadcast'

// 导出一个对象， 然后在需要用到的地方 通过混入添加
export default {
  methods: {
    $dispatch: dispatch,
    $broadcast: broadcast
  }
}
