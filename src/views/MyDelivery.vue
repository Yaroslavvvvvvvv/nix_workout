<script setup>
</script>

<template>
  <section class="flex items-center bg-stone-100 xl:h-screen font-poppins animate-fade-down animate-duration-1000">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
      <div class="flex flex-wrap ">
        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <img src="/images/delivery.jpg" alt="image"
               class="relative z-40 object-cover w-full h-96 rounded-3xl">
        </div>
        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
          <h2 class="mb-2 text-3xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-semibold text-gray-950">
            ДОСТАВКА І ОПЛАТА
          </h2>
          <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
            Доставка по всій Україні здійснюється за допомогою "Нової пошти"</p>
          <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-bold">
            У нас є 2 способи оплати</p>
          <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
            Металеве спорядження:</p>
          <ul>
            <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
              - Повна оплата на карту
            </li>
            <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
              - Передоплата 500-1000 грн взалежності від виробу<br>
              Решта суми наложним платежем
            </li>
          </ul>
          <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
            Все інше спорядження:</p>
          <ul class="mb-8">
            <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
              - Наложним платежем
            </li>
            <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
              - Повна передоплата
            </li>
          </ul>
          <div class="text-center">
            <router-link to="/catalog"
                         class="px-4 py-3 text-gray-950 transition-all transform border border-gray-950 rounded-3xl
             hover:bg-gray-950 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100
             dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100">
              Перейти в каталог
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>