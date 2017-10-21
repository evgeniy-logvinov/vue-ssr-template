import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../views'

Vue.use(Router)

// route-level code splitting
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Pages.Hello
    }
  ]
})

export default router