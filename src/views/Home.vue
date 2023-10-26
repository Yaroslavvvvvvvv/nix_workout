<script setup>
import { db } from '../firebaseConfig.js'
import { getDocs, collection } from 'firebase/firestore'
import { ref, onMounted } from 'vue';
const productsData = ref([]);
onMounted(async () => {

  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    productsData.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error while retrieving data from Firestore:', error);
  }
});
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
        v-for="product in productsData" :key="product.id"
        class="sticky top-0 h-screen flex flex-col items-center justify-center bg-stone-100">
      <div class="container my-24 mx-auto md:px-6">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                  :src="product.image"
                  alt="img"
                  class="relative z-40 object-cover w-full h-96 rounded-3xl"/>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 text-center">
              <h2 class="mb-4 text-3xl xl:text-5xl lg:text-4xl md:text-5xl sm:text-5xl font-semibold text-black">{{product.name}}</h2>
                <button
                    class=" h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-gray-800 rounded-lg
                  focus:shadow-outline hover:bg-gray-950">Детальніше</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>