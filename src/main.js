import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import {loadUserInfo} from 'common/js/cache'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

// 权限校验
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = loadUserInfo()
    if (!user || !user.token) {
      console.log('【用户鉴权】-未登录过，跳转至登录页面')
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
