<template>
  <div id="app">
    <button @click="refreshChildren">Refresh</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  mixins: [emitter],
  methods: {
    refreshChildren (params) {
      this.$broadcast('refresh', 'customInput', params)
    }
  },
  // 通过provide将当前表单实例传递到所有后代组件中
  provide () {
    return {
      appData: {
        a: 1, b: 2, c: 3
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
