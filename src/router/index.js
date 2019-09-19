import Vue from 'vue'
import Router from 'vue-router'

import router from './routers'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: router
})

export default route
