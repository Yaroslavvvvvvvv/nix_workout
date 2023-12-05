<template>
  <div class="max-w-7xl mx-auto p-8 animate-fade-down animate-duration-1000">
    <div class="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div class="flex flex-col gap-6 lg:w-2/4">
        <img :src="firstFirebaseImage" alt="image" class="w-full h-full rounded-xl"/>
      </div>
      <div class="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 class="mb-2 text-3xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-semibold text-gray-950">
            {{ productData.name }}</h1>
        </div>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-bold">
          Захисти свої сухожилля</p>
        <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Бинти зменшують ризик виникнення травм зап’ястя. Особливо на початку тренування.
          Це досягається завдяки компресійному і зігріваючому ефекту.</p>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Матеріал:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - габардин + трикотаж
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - ширина 9 см
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - м'який внутрішній шар, що не "гризе" в руки
          </li>
        </ul>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-bold">
          Стильний принт на вибір</p>
        <h6 class="text-2xl font-semibold">{{productData.price}} грн</h6>
        <div class="flex flex-row items-center gap-12 flex-wrap">
          <button
              @click="addToCart"
              class="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-3 px-16 rounded-xl h-full">Додати в кошик</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../../../firebaseConfig.js'
import { getDoc, doc } from 'firebase/firestore'
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      productData: {},
      firstFirebaseImage: "",
      cart: [],
    };
  },
  async created() {
    try {
      const productDoc = doc(db, 'bandages', 'LOQLkLwolWLxQCMz2hz9');
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        this.productData = productSnapshot.data();
        this.firstFirebaseImage = this.productData.image;
      } else {
        console.error('Product not found in Firestore');
      }
    } catch (error) {
      console.error('Error getting data from Firestore:', error);
    }
  },
  methods: {
    setActiveImage(image) {
      this.firstFirebaseImage = image;
    },
    addToCart() {
      const productToAdd = {
        image: this.productData.image,
        name: this.productData.name,
        price: this.productData.price,
      };

      this.$store.dispatch('addToCart', productToAdd);
      toast.success(`${this.productData.name} додані у кошик!`);
      console.log('Product added to cart:', productToAdd);
    },
  },
};
</script>

<style scoped>
</style>