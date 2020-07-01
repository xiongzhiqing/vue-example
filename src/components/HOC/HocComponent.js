const ValidateHoc = Component => ({
  name: `Hoc-${Component.name}`,
  props: ['rules'],
  data: () => ({
    errMsg: 'Hello Message',
    count: 0,
    value: ''
  }),
  methods: {
    validate (value) {
      this.value = value
      console.log(this.rules, value)
      /**
       * 校验逻辑
      */

      ++this.count
      return true
    }
  },
  render () {
    return (
      <div>
        <Component on-blur={this.validate} initValue={this.value} />
        {this.errMsg} -- { this.count}
      </div>
    )
  }
})

export default ValidateHoc