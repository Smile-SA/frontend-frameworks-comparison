import { createRouter, createWebHistory } from 'vue-router'
// import Index from '../views/Index.vue'
// import Layout from '../views/Layout.vue'
// import Dynamic from '../views/Dynamic.vue'
// import Async from '../views/Async.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // component: Index
      component: () => import('../views/Index.vue')
    },
    {
      path: '/layout',
      // component: Layout
      component: () => import('../views/Layout.vue')
    },
    {
      path: '/dynamic',
      // component: Dynamic
      component: () => import('../views/Dynamic.vue')
    },
    {
      path: '/async',
      // component: Async
      component: () => import('../views/Async.vue')
    }
  ]
})

export default router