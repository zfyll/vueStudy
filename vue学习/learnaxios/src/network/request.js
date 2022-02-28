import axios from "axios";

export function request (config){
// 1.创建axios的实例
const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
})

// 2.axios的拦截器 interceptors拦截器
// 拦截后记得返回（return）要不内部拿不到config
// 2.1请求拦截的作用
// 1.比如config中的一些信息不符合服务器的要求
// 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
// 3.某些网络请求((比如登录(token))),必须携带一些特殊的信息
instance.interceptors.request.use(
    config => {
        console.log(config);
        return config;
    },
    err => {
        console.log(err);
    }
)
// 2.2响应拦截
instance.interceptors.response.use(
    res => {
        console.log(res);
        return res
    },
    err => {
        console.log(err);
    }
)

// 3.真正的发送网络请求
// instance本身就是个返回promise的返回值
return instance(config)
}

// export function request (config){
//     // 1.创建axios的实例
//     return new Promise((resolve, reject)=>{
//         const instance = axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:5000
//     })
    
//     // 真正的发送网络请求
//      instance(config).then(res => {
//          resolve(res)
//      }).catch(err => {
//          reject(err)
//      })
//     })
//     }

// export function request (config,success,failure){
//     //   1.创建axios的实例
//             const instance = axios.create({
//                 baseURL:'http://123.207.32.32:8000',
//                 timeout:5000
//         })
        
//         // 真正的发送网络请求
//          instance(config).then(res => {
//              success(res)
//          }).catch(err => {
//             failure(err)
//          })
      
//         }