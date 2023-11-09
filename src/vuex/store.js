import {createStore} from 'vuex';

const store = createStore({
    state: {
        cart: [],
        cartItemCount: 0,
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
            state.cartItemCount = state.cart.length;
            saveCartToLocalStorage(state.cart);
        },
        removeFromCart(state, productIndex) {
            state.cart.splice(productIndex, 1);
            state.cartItemCount = state.cart.length;
            saveCartToLocalStorage(state.cart);
        },
        initializeCart(state, savedCart) {
            state.cart = savedCart;
            state.cartItemCount = savedCart.length;
        },
    },
    actions: {
        addToCart({commit}, product) {
            commit('addToCart', product);
        },
        removeFromCart({commit, state}, product) {
            const productIndex = state.cart.findIndex((item) => item.id === product.id);

            if (productIndex !== -1) {
                commit('removeFromCart', productIndex);
            }
        },
        initializeCart({commit}) {
            try {
                const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
                commit('initializeCart', savedCart);
                return savedCart;
            } catch (error) {
                console.error('Error initializing cart:', error);
                throw error;
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

// Вызовите initializeCart при запуске приложения, чтобы инициализировать корзину из localStorage
store.dispatch('initializeCart').then(() => {
    // Дополнительные действия после инициализации могут быть добавлены здесь, если необходимо.
});

// Добавьте хук перед выходом из приложения, чтобы сохранить корзину в localStorage
window.addEventListener('beforeunload', () => {
    saveCartToLocalStorage(store.state.cart);
});

function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default store;