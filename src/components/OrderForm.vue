<template>
  <div class="bg-gray-100 pt-20 pb-20 animate-fade-down animate-duration-1000">
    <div class="flex mb-6 justify-center">
      <div
          class="cursor-pointer px-4 py-2 text-gray-600 rounded-tl-lg"
          @click="activeTab = 'order'"
          :class="{ 'bg-gray-300': activeTab === 'order' }"
      >
        Заповнити форму
      </div>
      <div
          class="cursor-pointer px-4 py-2 text-gray-600 rounded-tr-lg"
          @click="activeTab = 'noRegistration'"
          :class="{ 'bg-gray-300': activeTab === 'noRegistration' }"
      >
        Швидке замовлення
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0 justify-center">
      <form v-show="activeTab === 'order'">
        <div class="text-center">
          <h3 class="font-bold mb-2">ОСОБИСТІ ДАНІ:</h3>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="email" name="floating_email" id="floating_email"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_email"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                 peer-focus:-translate-y-6">Вкажіть Ваш E-mail</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                   border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
                   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_first_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Вкажіть Ваше Ім'я</label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_last_name" id="floating_last_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                   border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
                   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_last_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Вкажіть Ваше прізвище</label>
          </div>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input type="tel"  name="floating_phone" id="floating_phone"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_phone"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Введіть Ваш телефон</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="text"  name="floating_number" id="floating_number"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_number"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">№ відділення Нової Пошти</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="text"  name="floating_address" id="floating_address"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_address"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Адреса</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="text"  name="floating_town" id="floating_town"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_town"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Місто</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="tel"  name="floating_index"  id="floating_index"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required/>
          <label for="floating_index"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Поштовий індекс</label>
        </div>
        <div class="text-center">
          <button type="submit"
                  class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ОФОРМИТИ ЗАМОВЛЕННЯ
          </button>
        </div>
      </form>
    </div>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <form v-show="activeTab === 'noRegistration'">
        <div class="text-center">
          <h3 class="font-bold mt-10 mb-2">ЗАМОВИТИ БЕЗ ОФОРМЛЕННЯ</h3>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_first_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Вкажіть Ваше Ім'я</label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input type="tel" name="floating_phone" id="floating_phone"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
                  focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required/>
            <label for="floating_phone"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                   transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                   rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                   peer-focus:-translate-y-6">Введіть Ваш телефон</label>
          </div>
        </div>
        <div class="text-center">
          <button type="submit"
                  class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ЧЕКАЮ ДЗВІНКА
          </button>
        </div>
      </form>
    </div>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-20">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
             v-for="product in store.state.cart" :key="product.id">
          <img :src="product.image" alt="product-image" class="w-full rounded-lg sm:w-40"/>
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ product.name }}</h2>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="text-base font-bold text-gray-900 logo">NIX</span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-lg font-medium">{{ product.price }} грн</p>
                <svg @click="removeItem(product)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor"
                     class="h-5 w-5 cursor-pointer duration-150 hover:text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div v-if="cart.length === 0">
          <p class="text-center text-2xl font-bold text-gray-950">Ваш кошик порожній</p>
        </div>
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">

        <hr class="my-4"/>
        <div class="flex justify-between">
          <p class="text-lg font-bold">Загалом</p>
          <div class="font-bold">
            <p class="mb-1 text-lg font-bold">{{ totalPrice }} грн</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';

import {useStore} from 'vuex';

const store = useStore();

const cart = store.state.cart;
const removeItem = (product) => {
  store.dispatch('removeFromCart', product);
}
const totalPrice = computed(() => {
  return cart.reduce((total, product) => total + product.price, 0);
});
const activeTab = ref('order');
</script>
<style scoped>
</style>