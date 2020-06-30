<template>
  <div class="home" v-resize:[direction].quiet="onResize" numberLength="6">
    <img alt="Vue logo" src="../assets/logo.png" @click="changeDirection($event, 1)">
    <div>window Height is: {{length}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <eight-queen @hook:mounted="select"></eight-queen>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EightQueen from '@/components/EightQueen'

export default {
  name: 'home',
  components: {
    HelloWorld,
    EightQueen
  },
  data () {
    return {
      direction: 'vertical',
      length: 0
    }
  },
  methods: {
    select () {
      console.log('child mounted')
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
