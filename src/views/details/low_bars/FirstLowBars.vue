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
          <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-bold">
            Переносні бруси з якими тренування вийдуть на зовсім інший рівень</p>
          <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
            Повністю розбірна конструкція</p>
          <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
            Забезпечує мобільність в транспортуванні і зберіганні</p>
        </div>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Регулювання висоти:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - 105 см
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - 90 см
          </li>
        </ul>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-bold">
          Виготовлені з грубостінного металу</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - діаметр ручки 42 мм
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - ширина  ручки 80 см
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - вага 25кг +-1
          </li>
        </ul>
        <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Завдяки чому на брусах можна виконувати будь-які вправи. Стійка на одній  руці, віджимання, вихід в стійку
          махом, підняття ніг на прес, навіть сальто. При цьому не боятись що конструкція впаде.</p>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Максимально зручні для будь-якого виду тренувань:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            -  допустиме навантаження 300 +кг
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - спеціальне порошкове покриття
          </li>
        </ul>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Резинові ніжки мають два ефекти:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - зменшують скользіння по будь якій поверхні
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - завдяки ним бруси не шрамують підлогу
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
        img1: "/images/products/mini_low_bars.jpg",
        img2: "/images/low_bars_details/first_low_bars.jpg",
        img3: "/images/low_bars_details/second_low_bars.jpg",},
      productData: {},
      firstFirebaseImage: "",
      cart: [],
    };
  },
  async created() {
    try {
      const productDoc = doc(db, 'low_bars', '0W58j2ObyJGuPt70AbYj');
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