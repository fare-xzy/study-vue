<template>
  <div>This is HandlerTest</div>
</template>

<script>
export default {
  name: "HandlerTest",
  created() {
    console.log("#### This is HanderTest.vue Created")
    // 触发errorHandlerTest
    console.log(a / 0)
  }
}
</script>

<style scoped>

</style>