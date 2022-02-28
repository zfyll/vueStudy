// 导入vue实例
import Vue from 'vue'
// 导入配置路由相关信息
import VueRouter from 'vue-router'
// import About from '../components/About'
// import Home from '../components/Home'
// import User from '../components/User'
// 路由懒加载
// 第一种
const Home = ()=> import('../components/Home')
const About = ()=> import('../components/About')
const HomeNew = ()=> import('../components/HomeNew')
const HomeMessage = ()=> import('../components/HomeMessage')
const Profile =()=> import('../components/Profile')
// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
// 2.创建VueRouter对象
const routes = [
  {
    // path:'/',和 path:''一样
    path:'',
    // redirect重定向（重新定义方向，通常来设置默认路由）
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   //  设置默认子路由
      //   path:'',
      //   redirect:'new'
      // },
      {
        // 子路由里面不要加/因为系统会自动加好例如:/home/message
        path:'message',
        component:HomeMessage
      },
      {
        path:'new',
        component:HomeNew
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }

  },
  {
    // 动态获取id（:useId可以自己自定义）
    // 路由懒加载
   // 第二种
    path: '/user/:useId',
    component: () => import('../components/User'),
    meta:{
      title:'用户'
    }

  },
  {
    path: '/profile',
    component: Profile,
    // meta:元数据(描述数据的数据)
    meta:{
      title:'文档'
    }
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  // 下面的routes是 routes=routes的简写
  routes,
  // mode设置路由的模式默认情况下是hash
  mode:'history',
  //  linkActiveClass具体请看vue学习word
  // linkActiveClass:'aaa'

})
// 全局守卫
// 全局前置守卫具体内容请看vue学习word(注意必须调用next()方法因为调用后才能跳转到下一个路由)
router.beforeEach((to, from, next) =>{
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('----');
  next()
})
// 全局后置守卫具体内容请看vue学习word(注意不需要主动调用next()方法因为这是路由已经跳转完了在做其他操作)
router.afterEach((to,from) =>{
  // console.log('====');
})
// 3.将router对象传入到vue实例
export default router
