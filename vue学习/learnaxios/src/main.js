import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios' 
import { request } from './network/request'

createApp(App).use(store).use(router).mount('#app')


// axios({
//     // 默认情况下就是get请求例如这种
//     url:'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//     console.log(res)
// })


// axios({
//     // 指定为其他请求例如get请求使用method方法
//     url:'http://123.207.32.32:8000/home/multidata',
//     method:'get'
// }).then(res => {
//     console.log(res)
// })


// axios({
//     // url后面的参数第一种可以直接拼接
//     // url:'http://123.207.32.32:8000/home/data?type=pop&page=1',
//     // 第二种参数分开写
//     // 专门针对get请求的参数拼接
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//         type:'pop',
//         page:1
//     },
//     method:'get'
// }).then(res => {
//     console.log(res)
// })

// 2.axios发送并发请求
// axios.all([axios({
//     url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//         type:'sell',
//         page:5
//     },
// })]).then(results => {
//     console.log(results)
// })

// axios.all([axios({
//     url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//         type:'sell',
//         page:5
//     },
//     // 使用axios.spread可将数组[res1，res2]展开为res1，res2
// })]).then(axios.spread((res1,res2) => {
//     console.log(res1);
//     console.log(res2);
// }))

// 封装axios调用
request({
    url:'/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// request({
//     url:'/home/multidata'
// },res => {console.log(res);}
// ,err => {console.log(err);}
// )


