import { createStore } from 'vuex'
window.axios = require('axios');

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  state: {
    panelUrl: 'https://panel.copa.webagent.ir',
    foodSlider: null,
    recipeCats: null,
    recipes: null,
    recipesByCat: null,
    recipe: null,
    productsCats: null,
    products: null,
    productsByCat: null,
    product: null,
    productFeatures: null,
  },
  mutations: {
    getFoodSlider(state) {
      axios.get(state.panelUrl + '/api/food/slides')
          .then((response) => {
            state.foodSlider = response.data;
          })
          .catch();
    },
    getRecipeCats(state) {
      axios.get(state.panelUrl + '/api/category/article')
          .then((response) => {
            state.recipeCats = response.data;
          }).catch();
    },
    getRecipes(state) {
      axios.get(state.panelUrl + '/api/article')
          .then((response) => {
            state.recipes = response.data.data;
          }).catch();
    },
    getRecipesByCat(state, catId) {
      axios.get(state.panelUrl + '/api/article/by/category/' + catId)
          .then((response) => {
            state.recipes = response.data.data;
          }).catch();
    },
    getRecipe(state, id) {
      axios.get(state.panelUrl + '/api/article/' + id)
          .then((response) => {
            state.recipe = response.data;
          }).catch();
    },
    getProductCats(state) {
      axios.get(state.panelUrl + '/api/category/product')
          .then((response) => {
            state.productsCats = response.data;
          }).catch();
    },
    getProducts(state) {
      axios.get(state.panelUrl + '/api/product')
          .then((response) => {
            this.data = response.data;
          }).catch();
    },
    getProductsByCat(state,catId) {
      axios.get(state.panelUrl + '/api/product/by/category/'+catId)
          .then((response) => {
            this.data = response.data;
          }).catch();
    },
    getProduct(state, id) {
      axios.get(state.panelUrl + '/api/product/' + id)
          .then((response) => {
            state.product = response.data.product;
          }).then((response) => {
        // if (state.product.features) {
        //     state.productFeatures = [];
        //     for (let i = 0; i < JSON.parse(state.product.features).length; i++) {
        //         state.productFeatures.push(JSON.parse(state.product.features)[i]);
        //     }
        // }
      }).catch();
    }

  },
  actions: {
    getFoodSlider(context) {
      context.commit('getFoodSlider');
    },
    getRecipeCats(context) {
      context.commit('getRecipeCats');
    },
    getRecipes(context) {
      context.commit('getRecipes');
    },
    getRecipe(context) {
      context.commit('getRecipe');
    },
    getProductCats(context) {
      context.commit('getProductCats');
    },
    getProducts(context) {
      context.commit('getProducts');
    },
    getProduct(context) {
      context.commit('getProduct');
    },

  }

})
