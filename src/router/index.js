import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/mixinTest',
    name: 'MixinTest',
    component: () => import('@/study/global-configuration/MixinTest.vue')
  },
  {
    path: '/handlerTest',
    name: 'HandlerTest',
    component: () => import('@/study/global-configuration/HandlerTest.vue')
  },
  {
    path: '/ignoredElementsTest',
    name: 'IgnoredElementsTest',
    component: () => import('@/study/global-configuration/IgnoredElementsTest.vue')
  },
  {
    path: '/nextTickTest',
    name: 'NextTickTest',
    component: () => import('@/study/global-api/NextTickTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
