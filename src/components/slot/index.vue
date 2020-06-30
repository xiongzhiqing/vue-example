<template>
  <div>
    <div v-if="loading">加载中...</div>
    <slot v-else :data="data">{{data.email}}</slot>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data () {
    return {
      loading: true,
      data: null
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
      this.data = {
        name: 'LiLei',
        email: 'xxx'
      }
    }, 1500)
  }
}
</script>