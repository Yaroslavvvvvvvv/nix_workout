<script setup>
const products = [
  {
    id: 1,
    name: 'Турніки Настінні',
    about: '',
    imageSrc: '../../src/assets/images/products/bars_img.jpg',
  },
  {
    id: 2,
    name: 'Переносні Бруси',
    about: '',
    imageSrc: '../../src/assets/images/products/low_bars_img.jpg',
  },
  {
    id: 3,
    name: 'Стійка для елементів',
    about: '',
    imageSrc: '../../src/assets/images/products/stand_img.jpg',
  },
  {
    id: 4,
    name: 'Паралетси',
    about: '',
    imageSrc: '../../src/assets/images/products/paralets_img.jpg',
  },
  {
    id: 5,
    name: 'Гумові і латексні петлі',
    about: '',
    imageSrc: '../../src/assets/images/products/rubber_img.jpg',
  },
  {
    id: 6,
    name: 'Обважнювачі',
    about: '',
    imageSrc: '../../src/assets/images/products/gainers_img.jpg',
  },
  {
    id: 7,
    name: 'Шкіряні накладки',
    about: '',
    imageSrc: '../../src/assets/images/products/linings_img.jpg',
  },
  {
    id: 8,
    name: 'Кистьові бинти',
    about: '',
    imageSrc: '../../src/assets/images/products/bandages_img.jpg',
  },
  {
    id: 9,
    name: 'Магнезія',
    about: '',
    imageSrc: '../../src/assets/images/products/magnesium_img.jpg',
  },
]
</script>

<template>
  <div class="relative">
    <div class="bg-cover bg-center sticky top-0 h-screen flex flex-col items-center justify-center bg-bg_img">
      <span
          class="animate-fade-down animate-duration-1000 animate-ease-linear text-center
          text-xl lg:text-7xl md:text-5xl sm:text-4xl leading-none tracking-tight font-bold text-gray-100/75">
        Calisthenics | Street workout brand
      </span>
    </div>
    <div
        v-for="product in products" :key="product.id"
        class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray-300">
      <div class="container my-24 mx-auto md:px-6">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                  :src="product.imageSrc"
                  alt="img"
                  class="relative z-40 object-cover w-full h-96 rounded-3xl"/>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 class="mb-4 text-3xl xl:text-5xl lg:text-4xl md:text-5xl sm:text-5xl font-semibold text-black">{{product.name}}</h2>
              <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
      <h2 class="text-4xl">The Fourth Title</h2>
    </div>
  </div>

</template>

<style scoped>
</style>