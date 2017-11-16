import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
const Login = () => import('components/login/login')
const Main = () => import('components/main/main')
const Index = () => import('components/index/index')
const Doctor = () => import('components/doctor/doctor')
const DoctorDetail = () => import('components/doctor-detail/doctor-detail')
const Order = () => import('components/order/order')
const UserCenter = () => import('components/user-center/user-center')

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/doctor',
          name: 'doctor',
          component: Doctor,
          children: [
            {
              path: ':id',
              component: DoctorDetail
            }
          ]
        },
        {
          path: '/order',
          name: 'order',
          component: Order,
          meta: {
            requiresAuth: true
          }
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
