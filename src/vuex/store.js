import { reactive } from 'vue';

const store = reactive({
    cartItems: [], // Сюда будут добавляться товары из каталога
});

export default store;