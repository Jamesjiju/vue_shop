import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 挂载路由导航守卫，表示如果没有登录就不能访问别的页面
// router.beforeEach((to, from, next) => {
// to表示将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
//  next() 放行  next('/login') 强制跳转
// if (to.path === '/login') return next()
// 获取token
// const tokenStr = window.sessionStorage.getItem('token')
// 如果token不存在，跳转到登录页
// if (!tokenStr) return next('/login')
// 如果token存在，直接放行
// next()
// })

export default router
