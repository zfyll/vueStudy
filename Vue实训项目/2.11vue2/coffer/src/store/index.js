import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter (state, payload) {
      payload.count++
    },
    addToCart (state, payload) {
      payload.count = 1
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart (context, payload) {
      const oldProduct = context.state.cartList.find(item => {
        return item.pid === payload.pid
      })
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
      } else {
        context.commit('addToCart', payload)
      }
    }
  },
  modules: {
  },
  getters: {
    cartLength (state) {
      return state.cartList.length
    }
  }

})
