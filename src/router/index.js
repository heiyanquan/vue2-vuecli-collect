import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 首页
const homeComponent = () => import('@/views/home/index')

const FrameLayout = () => import('@/views/frameLayout')

const routes = [
  {
    path: '/',
    name: 'FrameLayout',
    component: FrameLayout,
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        name: 'home',
        component: homeComponent
      },
      {
        path: 'module_id',
        component: () => import('views/module_id')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
