import { createStore } from "vuex";

//https://medium.com/@esmaydogdu/vuex-fetch-b0e8472e7676

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    fetchAllProducts(context) {
      let URLAPI;
      if(window.innerWidth < 768){
        URLAPI = 'https://fakestoreapi.com/products/'
      }else {
        URLAPI = 'https://fakestoreapi.com/products?limit=4'
      }
      return fetch(URLAPI)
        .then((response) => response.json())
        .then((data) => {
          context.commit("setProducts", data);
        })
        .catch((err) => console.error(err));
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
});
