import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () =>import('../views/home/Home')
const Category = () =>import('../views/category/Category')
const My = () =>import('../views/my/My')
const Shopcar = ()=> import('../views/shopcar/Shopcar')
import Detail from '../components/context/detail/Detail.vue'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcar',
    component:Shopcar
  },
  {
    path:'/detail/:pid',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
