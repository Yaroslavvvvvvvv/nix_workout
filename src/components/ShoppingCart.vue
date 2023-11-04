<template>
  <div class="bg-gray-100 pt-20 pb-20 animate-fade-down animate-duration-1000">
    <h1 class="mb-10 text-center text-2xl font-bold logo">NIX</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" v-for="product in cart" :key="product.id">
          <img :src="product.image" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{product.name}}</h2>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="text-base font-bold text-gray-900 logo">NIX</span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-lg font-medium">{{product.price}} грн</p>
                <svg @click="removeItem(product)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">

        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Загалом</p>
          <div class="font-bold">
            <p class="mb-1 text-lg font-bold">{{totalPrice}} грн</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-gray-600 py-1.5 font-medium text-blue-50 hover:bg-gray-800">Оформити</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';
const store = useStore();

const cart = store.state.cart;
const removeItem = (product) => {
  const index = cart.indexOf(product);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}
const totalPrice = computed(() => {
  return cart.reduce((total, product) => total + product.price, 0);
});

</script>
<style scoped>
.logo {
  font-family: 'Libre Baskerville', serif;
}
</style>