<template>
  <div>
    <validate #default={validate} :value="value" :rules="rules">
      <input type="text" @blur="validate" v-model="value">
    </validate>
    <validate #default={validate} :value="text" :rules="textRules">
      <textarea type="text" @blur="validate" v-model="text"></textarea>
    </validate>
  </div>
</template>

<script>
import Validate from '@/components/renderLess/Validate'
export default {
  name: 'RenderLess',
  data: () => ({
    value: 'hi',
    text: 'Hello',
    rules: [{
      test: function (value) {
        return /^\d{1,}$/.test(value)
      },
      message: '请输入一个数字'
    }],
    textRules: [{
      test: function (value) {
        return value
      },
      message: '不能为空'
    }]
  }),
  components: { Validate }
}
</script>