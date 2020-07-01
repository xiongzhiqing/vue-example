<template>
  <div>
    <slot :validate="validate"></slot>
    {{errMsg}}
  </div>
</template>

<script>
export default {
  name: 'RenderLessSlot',
  props: ['value', 'rules'],
  data () {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate () {
      console.log(this.rules)
      const validate = this.rules.reduce((pre, cur) => {
        console.log(this.value)
        const checked = cur && cur.test && cur.test(this.value)
        this.errMsg = checked ? '' : cur.message
        return pre && checked
      }, true)
      console.log(validate)
      return validate
    }
  }

}
</script>