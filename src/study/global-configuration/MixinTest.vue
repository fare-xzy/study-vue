<template>

</template>

<script>
var mixinTestMixin = {
  // 混入中的data数据会被调用方进行覆盖，如果有则覆盖，如果没有则使用。类似于java 继承
  data() {
    return {
      a: 'This is mixinTestMixin Data A',
      b: 'This is mixinTestMixin Data B'
    }
  },
  created() {
    console.log("This is mixinTestMixin Create")
    this.testMixinMethods()
  },
  // methods、components 、directives将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对
  methods:{
    testMixinMethods(){
      console.log("This is mixinTestMixin testMixinMethods")
    }
  }
}
export default {
  name: "MixinTest",
  mixins:[mixinTestMixin],
  data() {
    return {
      a: 'This is MixinTest.vue\'s Data A',
      c: 'This is MixinTest.vue\'s Data C'
    }
  },
  created() {
    console.log("This is MixinTest.vue's Create")
    console.log(this.$data)
    console.log("---------"+this.$options.mixinTest)
  },
  methods:{
    testMixinMethods(){
      console.log("This is MixinTest.vue's testMixinMethods")
    }
  }
}
</script>

<style scoped>

</style>