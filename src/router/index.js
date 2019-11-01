import Vue from 'vue'
import Router from 'vue-router'

import router from './routers'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: router,
  base: '/vueTest'
})

export default route
