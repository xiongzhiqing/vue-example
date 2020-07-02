<template>
  <div class="home" v-resize:[direction].quiet="onResize" numberLength="6">
    <img alt="Vue logo" width="80" src="../assets/logo.png" @click="changeDirection($event, 1)">
    <h2>
      isReload: {{now}}
      <button type="button" @click="forceUpdate">forceUpdate</button>
    </h2>
    <h2>RenderLess</h2>
    <index-render-less :key="nowKey"></index-render-less>
    <h2>HOC</h2>
    <validate-input :rules="rules"></validate-input>
    <hr>
    <h2>组件设计：IndexPage</h2>
    <index-page :length="length"></index-page>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/layout/IndexPage'
import IndexRenderLess from '@/components/renderLess/Index'
import HocComponent from '@/components/HOC/HocComponent'
import Input from '@/components/HOC/Input'
const ValidateInput = HocComponent(Input)
export default {
  name: 'home',
  components: { IndexPage, IndexRenderLess, ValidateInput },
  provide () {
    return {
      changingKey: this.changingKey
    }
  },
  created () {
    // 监听子组件 IndexPage 中dispatch来的register事件
    this.$on('register', component => {
      console.log(component, 'dispatch ------')
    })
  },
  data () {
    return {
      direction: 'vertical',
      length: 0,
      now: Date.now(),
      nowKey: '',
      rules: [{
        test: function (value) {
          return /^\d{1,}$/.test(value)
        },
        message: '请输入一个数字'
      }]
    }
  },
  methods: {
    forceUpdate () {
      this.$forceUpdate()
    },
    changingKey () {
      this.nowKey = Date.now()
    },
    onResize (val) {
      console.log(val)
      this.length = val
    },
    changeDirection (e, v) {
      console.log(e, v)
      this.$message({
        type: 'success',
        content: '成功信息提示',
        duration: 3000
      })
      this.direction = this.direction ? '' : 'vertical'
    }
  }
}
</script>
