import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [],
        cartItemCount: 0,
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
            state.cartItemCount = state.cart.length;
        },
        removeFromCart(state, productIndex) {
            state.cart.splice(productIndex, 1);
            state.cartItemCount = state.cart.length;
        },
        updateCartItemCount(state) {
            state.cartItemCount = state.cart.length;
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        removeFromCart({ commit, state }, product) {
            const productIndex = state.cart.findIndex((item) => item.id === product.id);

            if (productIndex !== -1) {
                commit('removeFromCart', productIndex);
            }
        },
    },
    getters: {
        totalCartPrice(state) {
            return state.cart.reduce((total, product) => total + product.price, 0);
        },
        cartItemCount: (state) => state.cart.length,
    },
});