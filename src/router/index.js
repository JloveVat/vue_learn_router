import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载, 魔法注释(打包的文件名)
// const Home = () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
// const About = () => import(/* webpackChunkName: 'about' */ '../views/About.vue')

// 创建一个路由: 映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue'),
    meta: {
      name: 'jing',
      age: 22
    },
    children: [
      {
        path: '/home', // 相当于/home/recommend
        redirect: '/home/recommend'
      },
      {
        path: 'recommend', // 相当于/home/recommend
        component: () => import('../views/HomeRecommend.vue')
      },
      {
        path: 'ranking', // 相当于/home/recommend
        component: () => import('../views/HomeRanking.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/user/:id', // 动态路由
    component: () => import(/* webpackChunkName: 'user' */ '../views/User.vue')
  },
  {
    path: '/order', // 动态路由
    component: () => import(/* webpackChunkName: 'order' */ '../views/Order.vue')
  },
  {
    path: '/login', // 动态路由
    component: () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)', // 最后加*('/:pathMatch(.*)*')时会将路径以/分为数组
    component: () => import(/* webpackChunkName: 'notFound' */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  // 映射关系
  routes,
  // 指定采用模式, hash和history模式
  history: createWebHashHistory()
  // history: createWebHistory()
})

// 动态添加路由
const isAdmin = true
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: '/admin',
    component: () => import('../views/Admin.vue')
  })

  // 添加二级路由
  router.addRoute('home', {
    path: 'vip',
    component: () => import('../views/HomeVip.vue')
  })
}

// 删除路由  参数: 路由的name
// router.removeRoute('about')

// 获取router所有的映射路由对象
console.log(router.getRoutes())

// 2.路由导航守卫
// 需求: 进入到订单(Order)页面时, 判断用户是否登陆
// 情况一: 用户没有登陆, 跳转到登录页面
// 情况二: 用户已经登陆, 直接进入到订单页面
router.beforeEach((to, from) => {
  console.log(to, from)
  // 1.进入到任何别的页面都调到login
  // if (to.path !== '/login') {
  //   return '/login'
  // }

  // 2.进入到订单页面时, 判断用户是否登陆
  const token = localStorage.getItem('token')
  console.log(token)
  if (!token && to.path === '/order') {
    return '/login'
  }

  // 返回false取消导航
  // return false
})

export default router

// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活的组件里调用 beforeRouteLeave 守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫(2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
