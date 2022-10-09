<template>
  <div class="home">
    <button @keyup.vueTestKeyCodes="testKeyCodes">vueTestKeyCodes</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    testKeyCodes(){
      console.log("123123")
      alert("This is customs vueTestKeyCodes")
    }
  }
}
</script>
