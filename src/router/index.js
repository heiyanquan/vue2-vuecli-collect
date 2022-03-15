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
    children: [
      {
        path: '/home',
        name: 'home',
        component: homeComponent
      },
      {
        path: '/vnodeOptimize',
        name: 'vnodeOptimize',
        component: () => import('@/views/vnodeOptimize/vnodeOptimize')
      },
      {
        path: '/vnodeNormal',
        name: 'vnodeNormal',
        component: () => import('@/views/vnodeOptimize/normal')
      },
      {
        path: 'worker',
        component: () => import('@/views/worker/worker')
      },
      {
        path: 'module_id',
        component: () => import('@/views/module_id')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
