<template>
  <div class="bg-gray-100 pt-20 pb-20 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
      <form>
        <h3 class="font-bold mb-2">ОСОБИСТІ ДАНІ:</h3>
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
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
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
        <div class="text-center">
          <button type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ОФОРМИТИ ЗАМОВЛЕННЯ
          </button>
        </div>
      </form>
    </div>
    <div class="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
      <form>
        <h3 class="font-bold mt-10 mb-2">ЗАМОВИТИ БЕЗ ОФОРМЛЕННЯ</h3>
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
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
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
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ЧЕКАЮ ДЗВІНКА
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
</style>