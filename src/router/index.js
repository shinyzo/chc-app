import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
const Login = () => import('components/login/login')
const Main = () => import('components/main/main')
const Index = () => import('components/index/index')
const Order = () => import('components/order/order')
const UserCenter = () => import('components/user-center/user-center')

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'loginview',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      meta: {requiresAuth: true},
      component: Main,
      children: [
        {
          path: '/index',
          name: 'index',
          meta: {requiresAuth: true},
          component: Index
        },
        {
          path: '/order',
          name: 'order',
          component: Order
        },
        {
          path: '/user',
          name: 'user',
          component: UserCenter
        }
      ]
    }
  ]
})
