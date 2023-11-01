// store.js

import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [], // начальный пустой массив для корзины
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
        },

    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
    },
});
