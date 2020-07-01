<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
export default {
  pageVisible () {
    console.log('窗口显示了')
  },
  pageHidden () {
    console.log('窗口隐藏了')
  }
}
</script>