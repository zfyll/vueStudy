import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
  },
  mutations: {
    addCounter(state,payload){
       payload.count++
    },
    addToCart(state,payload){
      payload.count =1
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      // for循环方法
    //  let oldProduct = null;
    //  for(let item of state.cartList){
    //    if(item.pid === payload.pid)
    //    {
    //     //  oldProduct=item 赋值的是指向对象的地址，指向同一个对象
    //      oldProduct = item;
    //    } 
    //  }
    //  if(oldProduct){
    //   oldProduct.count+=1;
    // }
    // else{
    //   payload.count =1
    //  state.cartList.push(payload)
    // }
    // }
   

    // 数组find方法
    let oldProduct= context.state.cartList.find( item => {
      return item.pid === payload.pid
    })
    if(oldProduct){
        // oldProduct.count+=1;
        context.commit('addCounter',oldProduct)
      }
      else{
      //   payload.count =1
      //  context.state.cartList.push(payload)
      context.commit('addToCart',payload)
      }
    }
  },
  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    }
  }
})
