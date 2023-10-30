<script setup>

</script>

<template>
    <footer class="bg-zinc-700">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <router-link to="/" class="-m-1.5 p-1.5 flex flex-col items-center">
            <span class="logo text-3xl font-extrabold text-dark">NIX</span>
            <span class="logo text-2xl font-bold text-dark">-workout-</span>
          </router-link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">
          ©Created by Yaroslav Kovalchuk 2023<br>
          All rights Reserved
        </span>
      </div>
    </footer>

</template>

<style scoped>
.logo {
  font-family: 'Libre Baskerville', serif;
}
</style>