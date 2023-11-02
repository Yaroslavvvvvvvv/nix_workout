import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [], // начальный пустой массив для корзины
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
        },
        removeFromCart(state, productIndex) {
            state.cart.splice(productIndex, 1);
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
    },
});