import { createStore } from 'vuex'

export default createStore({

  // 数据
  state: {
    message:'why',
      counter:1000,
      students:[
        {id:110,name:'aaa',age:18},
        {id:111,name:'bbb',age:21},
        {id:112,name:'ccc',age:31},
        {id:113,name:'ddd',age:188}
      ]
  },
  // 方法
  // 第一个参数state
  mutations: {
    jia(state){
      state.counter++;
    },
    jian(state){
      state.counter--;
    },
    // 传入一个额外参数
    jiacount(state,count){
    state.counter+=count;
    },
    // 传入多个参数时通常以对象的形式传递，这个时候何以再从对象中取出相关信息
    jiastu(state,stu){
      state.students.push(stu)
    },
    updateinfo(state){
      state.message='nihao'
    }
  },
  // 异步操作
  actions: {
    // context上下文不能调用模板里的mutations,payload重载
    aupdateinfo(context,payload){
 return new Promise((resolve, reject)=>{
   setTimeout(()=>{
    // actions这里的commit调用的是 mutations不是模板（modules）里面的mutations
     context.commit('updateinfo');
     console.log(payload);
     resolve('1111')
   },1000)
 })
    }
  },
  // 相当于计算属性
  getters:{
    // 第一个参数是state第二个参数是他本身getters
    cheng(state){
      return state.counter * state.counter
    },
    more20stu(state){
    return state.students.filter(s => s.age>20)
    },
    more20stulenght(state,getters){
      return getters.more20stu.length
      },
      moreAge(state){
        return function(age){
          return state.students.filter(s => s.age>age)
        }
      }
  },
  // 模板
  modules: { 
    a:{
      // app.vue界面调用modules里的state方法不一样具体看app.vue界面代码
      state:{
        name:'zhangsan'
      },
      // 模板里的mutations现在模板里面找没有就在原本的mutations里面找调用方法与原来一致
      mutations:{
        updateName(state,payload){
          state.name = payload
        }
      },
        // 模板里的actions里的context只会调用模板里的mutations调用方法与原来一致
      actions:{
        aupdateName(context,payload){
            setTimeout(()=>{
              context.commit('updateName',payload);
            },1000)
             }
      },
      // 模板里的getters现在模板里面找没有就在原本的getters里面找调用方法与原来一致
      getters:{
        fullname(state){
          return state.name + 'aaaa'
        },
        fullname2(state,getters){
          return getters.fullname + '1111'
        },
        fullname3(state,getters,rootState){
          return getters.fullname2 + rootState.message
        }
      },
      modules:{}
    }
  }
})
