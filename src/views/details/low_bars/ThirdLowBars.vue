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
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Максимально стабільна і міцна конструкція:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - вага 21 кг
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - профіль 40*40
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - довжина кожної нижньої опори 80 см
          </li>
        </ul>
        <p class="mb-2 text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Завдяки чому на брусах можна виконувати любі вправи і при цьому не боятись що конструкція впаде.</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - допустиме навантаження 300+ кг
          </li>
        </ul>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Максимально зручні для будь-якого виду тренувань:</p>
        <ul>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - ручка діаметром 40 мм і довжиною 80 см
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - спеціальне порошкове покриття
          </li>
        </ul>
        <p class="text-base xl:text-xl lg:text-xl md:text-xl sm:text-xl leading-7 text-gray-600 font-semibold">
          Зручність і вигода в транспортуванні:</p>
        <ul>
          <li class="mb-2 text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - розбірна конструкція
          </li>
          <li class="text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg leading-7 text-gray-500">
            - використовуємо унікальні п-подібний спосіб кріплення продуманий так, що після збірки бруси мають таку
            саму міцність і жорсткість немов суцільно зварені
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
        img1: "/images/products/mini_fix_bars.jpg",
        img2: "/images/low_bars_details/first_fix_bars.jpg",
        img3: "/images/low_bars_details/second_fix_bars.jpg",},
      productData: {},
      firstFirebaseImage: "",
      cart: [],
    };
  },
  async created() {
    try {
      const productDoc = doc(db, 'low_bars', 'wcyPWhmc8KR2g2YctfUv');
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