<template>
  <div class="overflow-y-hidden animate-fade-down animate-duration-1000">
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-6 bg-stone-100 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8  w-full">
            <router-link to="/bars">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full"
                     src="/images/catalog/men_bars.jpg" alt="men"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute
                  text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Турніки Настінні
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36
                  bg-white bg-opacity-50"></div>
              </div>
            </router-link>
            <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <router-link to="/linings">
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full"
                       src="/images/catalog/men_linings.jpg" alt="shoe-image"/>
                  <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Шкіряні накладки
                  </button>
                  <div
                      class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
                </div>
              </router-link>
              <router-link to="/bandages">
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full"
                       src="/images/catalog/men_bandages.jpg" alt="watch-image"/>
                  <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Кистьові бинти
                  </button>
                  <div
                      class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
                </div>
              </router-link>
            </div>
            <router-link to="/low_bars">
              <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img class="object-center object-cover h-full w-full"
                     src="/images/catalog/men_low_bars.jpg" alt="image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Переносні Бруси
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </router-link>
            <router-link to="/low_bars">
              <div
                  class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img class="object-center object-cover h-full w-full hidden md:block"
                     src="/images/catalog/men_low_bars.jpg" alt="girl-image"/>
                <img class="object-center object-cover h-full w-full md:hidden"
                     src="/images/catalog/men_low_bars.jpg"
                     alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Переносні Бруси
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </router-link>
          </div>
          <router-link to="/low_bars">
            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img class="object-center object-cover h-full w-full hidden md:block"
                   src="/images/catalog/men_low_bars.jpg" alt="girl-image"/>
              <img class="object-center object-cover h-full w-full sm:hidden"
                   src="/images/catalog/men_low_bars.jpg"
                   alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
              <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Переносні Бруси
              </button>
              <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-y-hidden animate-fade-down animate-duration-1000">
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-6 bg-stone-100 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8  w-full">
            <router-link to="/stand">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full"
                     src="/images/catalog/men_stand.jpg" alt="girl-image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute
                  text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Стійки
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36
                  bg-white bg-opacity-50"></div>
              </div>
            </router-link>
            <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <router-link to="/wooden_paralets">
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full"
                       src="/images/catalog/men_woods_paralets.jpg" alt="shoe-image"/>
                  <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Дерев’яні
                  </button>
                  <div
                      class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
                </div>
              </router-link>
              <router-link to="/magnesium">
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full"
                       src="/images/products/magnesium_img.webp" alt="image"/>
                  <button
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Магнезія
                  </button>
                  <div
                      class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
                </div>
              </router-link>
            </div>
            <router-link to="/paralets">
              <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img class="object-center object-cover h-full w-full"
                     src="/images/catalog/men_paralets.jpg" alt="girl-image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Паралетси
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </router-link>
            <router-link to="/paralets">
              <div
                  class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img class="object-center object-cover h-full w-full hidden md:block"
                     src="/images/catalog/men_paralets.jpg" alt="girl-image"/>
                <img class="object-center object-cover h-full w-full md:hidden"
                     src="/images/catalog/men_paralets.jpg"
                     alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Паралетси
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </router-link>
          </div>
          <router-link to="/paralets">
            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img class="object-center object-cover h-full w-full hidden md:block"
                   src="/images/catalog/men_paralets.jpg" alt="girl-image"/>
              <img class="object-center object-cover h-full w-full sm:hidden"
                   src="/images/catalog/men_paralets.jpg"
                   alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
              <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Паралетси
              </button>
              <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
</style>