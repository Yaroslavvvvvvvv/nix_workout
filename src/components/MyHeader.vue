<script setup>
import { ref } from 'vue'
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
</script>

<template>
  <header class="sticky top-0 bg-gray-950/95  z-10">
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