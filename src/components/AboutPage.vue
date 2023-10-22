<script setup>

</script>

<template>
  <div class="relative">
    <div class="bg-cover bg-center sticky top-0 h-screen flex flex-col items-center justify-center bg-bg_img">
      <span
          class="animate-fade-down animate-duration-1000 animate-ease-linear text-center
          text-xl lg:text-7xl md:text-5xl sm:text-4xl leading-none tracking-tight font-bold text-amber-300">
        Calisthenics | Street workout brand
      </span>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-500/90">
      <div class="container my-24 mx-auto md:px-6">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                  src="../assets/images/first.jpg"
                  alt="img"
                  class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">{title}</h2>
              <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
      <div class="container my-24 mx-auto md:px-6">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                  src="../assets/images/fourth.png"
                  alt="img"
                  class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">{title}</h2>
              <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">

    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
      <h2 class="text-4xl">The Fourth Title</h2>
    </div>
  </div>

</template>

<style scoped>
</style>