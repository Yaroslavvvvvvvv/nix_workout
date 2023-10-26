<script setup>

</script>

<template>
  <div class="bg-white h-screen flex flex-col items-center justify-center  animate-fade-down animate-duration-1000">
    <div class="container my-24  mx-auto md:px-6">
      <div class="justify-center mt-96 flex-1 lg:mt-0 md:mt-96 sm:mt-96 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
                src="/images/delivery.jpg"
                alt="img"
                class="relative z-40 object-cover w-full h-96 rounded-3xl"/>
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <h2 class="mb-2 text-3xl xl:text-5xl lg:text-4xl md:text-5xl sm:text-5xl font-semibold text-black">
              ДОСТАВКА І ОПЛАТА
            </h2>
            <p class="mb-2 text-xl xl:text-3xl lg:text-2xl md:text-4xl sm:text-4xl font-semibold text-black">
              здійснюється наступним чином:
            </p>
            <p class="mb-4 xl:text-2xl lg:text-xl md:text-2xl sm:text-2xl font-medium text-zinc-700">
              Доставка по всій Україні здійснюється за допомогою "Нової пошти"
            </p>
            <p class="mb-2 text-xl xl:text-3xl lg:text-2xl md:text-4xl sm:text-4xl font-semibold text-black">
              У нас є 2 способи оплати
            </p>
            <h3 class="text-xl xl:text-2xl lg:text-2xl md:text-3xl sm:text-3xl font-semibold text-black">
              Металеве спорядження:</h3>
            <ul>
              <li class="xl:text-xl lg:text-xl  md:text-2xl sm:text-2xl font-semibold text-zinc-700">
                - Повна оплата на карту</li>
              <li class="xl:text-xl lg:text-xl md:text-2xl sm:text-2xl font-semibold text-zinc-700">
                - Передоплата 500-1000 грн взалежності від виробу<br>
                Решта суми наложним платежем
              </li>
            </ul>
            <h3 class="text-xl xl:text-2xl lg:text-2xl md:text-3xl sm:text-3xl font-semibold text-black">
              Все інше спорядження:</h3>
            <ul>
              <li class="xl:text-xl lg:text-xl md:text-2xl sm:text-2xl font-semibold text-zinc-700">
                - Наложним платежем</li>
              <li class="xl:text-xl lg:text-xl md:text-2xl sm:text-2xl font-semibold text-zinc-700">
                - Повна передоплата</li>
            </ul>
            <div class="text-center mt-4">
             <router-link to="/catalog">
               <button class=" h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-gray-800 rounded-lg
                  focus:shadow-outline hover:bg-gray-950">Перейти в каталог
               </button>
             </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>