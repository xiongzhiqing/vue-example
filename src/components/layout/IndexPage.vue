<template>
  <layout>
    <template v-slot:header>自定义头部</template>

    <template v-slot:default>
      <h4>Hello Content</h4>
      <h3>provide
与
inject
，不止父子传值，祖宗传值也可以:
        {{appData.a}} - {{appData.b}} - {{appData.c}}</h3>
      <template>

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

      </template>

    </template>

    <template v-slot:footer>自定义尾部</template>
  </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'
import HelloWorld from '@/components/HelloWorld.vue'
import EightQueen from '@/components/EightQueen'
import SLoad from '@/components/slot/index.vue'
import emitter from '@/utils/emitter'

export default {
  mixins: [emitter],
  inject: ['appData'],
  props: {
    length: {
      type: Number,
      default: 0
    }
  },
  components: {
    Layout,
    HelloWorld,
    EightQueen,
    SLoad
  },
  mounted () {
    // 在组件渲染完之后， 将组件通过$dispatch将自己注册到Home组件上
    this.$dispatch('register', 'home', this)
  },
  methods: {
    select () {
      console.log('watch child component mounted')
    },
  }
}
</script>