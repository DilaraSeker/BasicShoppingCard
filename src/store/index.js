import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        description: '1st product',
        image:
          "https://cdn03.ciceksepeti.com/cicek/kc213466-1/XL/makyajli-pasta-kc213466-1-3.jpg",
        price:50,
        quantity: 0
      },
      {
        id: 2,
        name: 'Product 2',
        description: '2nd product',
        image:
          "https://www.pastamburada.com/img/m/1/nutella-pasta-1588.jpg",
        price:150,
        quantity: 0        
      },
      {
        id: 3,
        name: 'Product 3',
        description: '3th product',
        image:
          "https://www.droetker.com.tr/Recipe/Recipes/droetker.com.tr/tr-tr/baking/image-thumb__55886__RecipeDetailsLightBox/gokkusagi-pasta.jpg",
        price:200,
        quantity: 0      
      }
    ],
    cart: [],
    uniqueItemsInCart: [],
    totalPrice: 0,
  },
  mutations: {
    addToCart(state,payload) {
      state.cart.push(payload)
    },
    removeFromCart(state,payload) {
      let index = state.cart.findIndex(i => i.id === payload.id);
      state.cart.splice(index,1)
    },
    setUniqueItems(state,payload) {
      state.uniqueItemsInCart = payload
    },
    setTotal(state,payload) {
      state.totalPrice = payload
    }
  },
  actions: {
    addToCartAction({commit,dispatch},payload) {
      commit('addToCart',payload)
      dispatch('setTotalPrice')
    },
    removeFromCartAction({commit,dispatch},payload) {
      commit('removeFromCart',payload)
      dispatch('setTotalPrice')
    },
    filterUniqueItems({state,commit}) {
      let filtered = state.cart.filter((item, index) => state.cart.indexOf(item) === index)
      commit('setUniqueItems',filtered)
    },
    setTotalPrice({state,commit}) {
      let total = 0
      state.cart.forEach((e) => total += e.price)
      commit('setTotal',total.toFixed(2))
      console.log('totalPriceStore',state.totalPrice)
    }
  },
  modules: {
  }
})
  