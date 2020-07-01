<template>
  <input type="text" @blur="$emit('blur', value)" v-model="value" />
</template>

<script>
export default {
  name: 'customInput',
  props: ['initValue'],
  data () {
    return {
      value: this.initValue
    }
  },
  created () {
    this.$on('refresh', params => {
      // 刷新事件
      console.log(params, '刷新事件')
    })
  }
}
</script>