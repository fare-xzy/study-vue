import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局配置
//
// 配置为true取消vue相关所有异常信息（F12）
Vue.config.silent = true
// 配置为true F12会有生产提示
Vue.config.productionTip = false
// 开启devTool检查代码 开发版本默认为 true，生产版本默认为 false
Vue.config.devtools = false
// 基于谷歌插件Vue Performance Devtool
Vue.config.performance=true
// 全局混入
var mainJsMixin = {
  created(){
    console.log("This is main.js var mixin")
  }
}

// Vue.config.optionMergeStrategies.mixinTest = (toVal, fromVal) =>{
//   console.log("toVal++++=+"+toVal)
//   console.log("fromVal+++++=+"+fromVal)
//   return toVal || fromVal
// }

Vue.config.errorHandler = (err, vm, info)=>{
  console.log("#### errorHandler error", err)
  console.log("#### errorHandler vm", vm)
  console.log("#### errorHandler info", info)
}

// 并未发现有什么警告信息提示
Vue.config.ignoredElements = [

]

Vue.config.keyCodes = {
  vueTestKeyCodes : [8, 13]
}

// 全局API


new Vue({
  // 全局混入
  mixins:[mainJsMixin],
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
