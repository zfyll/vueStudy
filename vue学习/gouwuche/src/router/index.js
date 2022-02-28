import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () =>import('../views/home/Home')
const Category = () =>import('../views/category/Category')
const My = () =>import('../views/my/My')
const Shopcar = ()=> import('../views/shopcar/Shopcar')
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
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
