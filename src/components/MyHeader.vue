<script setup>

import { ref, computed } from 'vue';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
import { useStore } from 'vuex';
const store = useStore();
const cartItemCount = computed(() => store.state.cartItemCount);

</script>

<template>
  <header class="sticky top-0 bg-gray-700/90 z-10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 animate-fade-down animate-duration-1000"
         aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5 flex flex-col items-center">
          <span class="logo text-3xl font-extrabold text-white">NIX</span>
          <span class="logo text-2xl font-bold text-white">-workout-</span>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/about" class="text-lg font-bold leading-6 text-gray-300 hover:text-white">Про нас</router-link>
        <router-link to="/catalog" class="text-lg font-bold leading-6 text-gray-300 hover:text-white">Каталог</router-link>
        <router-link to="/delivery" class="text-lg font-bold leading-6 text-gray-300 hover:text-white">Доставка і оплата</router-link>
        <a href="#" class="text-lg font-bold leading-6 text-gray-300 hover:text-white">Зв'язок з нами</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end justify-center items-center">
        <router-link to="/shopping">
        <div class="relative py-2">
          <div class="t-0 absolute left-3">
            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-gray-100 p-3 text-xs font-bold text-gray-950">
              {{  cartItemCount }}
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5
            14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5
            14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        </router-link>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
          @click="mobileMenuOpen = false"
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1
          sm:ring-gray-900/10 animate-fade-down animate-duration-1000">
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5 flex flex-col items-center">
            <span class="logo text-3xl font-extrabold text-gray-750">NIX</span>
            <span class="logo text-2xl font-bold text-gray-750">-workout-</span>
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500">
            <div class="space-y-2 py-6">
              <router-link to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-100/50">Про нас</router-link>
              <router-link to="/catalog" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-100/50">Каталог</router-link>
              <router-link to="/delivery" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-100/50">Доставка і оплата</router-link>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-100/50">Зв'язок з нами</a>
              <router-link to="/shopping"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-100/50">Кошик</router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
.logo {
  font-family: 'Libre Baskerville', serif;
}
</style>