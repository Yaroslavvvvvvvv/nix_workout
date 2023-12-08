<template>
  <div class="max-w-7xl mx-auto p-8 animate-fade-down animate-duration-1000">
    <div class="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div class="flex flex-col gap-6 lg:w-2/4">
        <img :src="firstFirebaseImage" alt="image" class="w-full h-full aspect-square rounded-xl"/>
        <div class="flex flex-row justify-between h-24">
          <img v-for="(image, index) in Object.values(imagesMini)" :key="index" :src="image" alt="image"
               class="w-24 h-24 rounded-md cursor-pointer" @click="setActiveImage(image)" />
        </div>
      </div>
      <div class="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 class="mb-2 text-3xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-semibold text-gray-950">
            {{ productData.name }}</h1>
        </div>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - матеріал: дуб/бук
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - приємна на дотик і зручна під час<br>тренувань ручка діаметром 40 мм
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - резинові ніжки
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - зручні в транспортуванні (вага 2.5 кг)
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - допустиме навантаження 250+ кг
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - висота 10 см, ширина 13 см
          </li>
        </ul>
        <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Для чого вони?</p>
        <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          На них ви зможете:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - віджиматись, стояти на руках
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - віджиматись у стійці
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - навчитись елементам 'горизонт', 'l-sit', 'v-sit'
          </li>
          <li class="mt-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - прокачати верхній плечовий пояс, збільшити силу зап’ясть
          </li>
        </ul>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      imagesMini: {
        img1: "/images/wooden_details/first_wooden.jpg",
        img2: "/images/wooden_details/fourth_wooden.jpg",
        img3: "/images/wooden_details/fifth_wooden.jpg",},
      productData: {},
      firstFirebaseImage: "",
      cart: [],
    };
  },
  async created() {
    try {
      const productDoc = doc(db, 'wooden_paralets', 'RVEkXyhkfln1xlcxdgqO');
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        this.productData = productSnapshot.data();
        this.firstFirebaseImage = this.productData.img;
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