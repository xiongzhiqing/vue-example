<template>
  <div class="home" v-resize:[direction].quiet="onResize" numberLength="6">
    <img alt="Vue logo" src="../assets/logo.png" @click="changeDirection($event, 1)">
    <hr>
    <h4>slot:</h4>
    <s-load url="http:xxxx/api" #default={data}>
      <div >江山如此多娇 -- {{data.name}}</div>
    </s-load>
    <hr>
    <h4>directives:</h4>
    <div>window Height is: {{length}}</div>
    <hr>
    <h4>JSX:</h4>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <eight-queen @hook:mounted="select"></eight-queen>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EightQueen from '@/components/EightQueen'
import SLoad from '@/components/slot/index.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    EightQueen,
    SLoad
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
