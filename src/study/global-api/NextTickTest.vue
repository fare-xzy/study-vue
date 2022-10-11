<template>
  <div>
    <div>{{ msg }}</div>
    <a href="#" @click="changeMsg">改变</a>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "NextTickTest",
  data() {
    return {
      msg: "你好"
    }
  },
  methods:{
    changeMsg(){
      console.log( "Before："+this.$el.textContent)
      this.msg = 'new message' // 更改数据
      console.log( "After："+this.$el.textContent)
      this.$nextTick(()=>{
        console.log( "In nextTick："+this.$el.textContent)
      })
    }
  }
}


</script>

<style scoped>

</style>