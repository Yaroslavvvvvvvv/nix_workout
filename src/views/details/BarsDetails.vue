<template>
  <div class="max-w-7xl mx-auto p-8 animate-fade-down animate-duration-1000">
  <div class="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
    <div class="flex flex-col gap-6 lg:w-2/4">
      <div>
        <router-link to="/bars" class="px-4 py-3 text-gray-950 font-medium">← Назад (Настінні Турніки)</router-link>
      </div>
      <img :src="activeImg" alt="image" class="w-full h-full aspect-square object-cover rounded-xl"/>
      <div class="flex flex-row justify-between h-24">
        <img v-for="(image, index) in Object.values(images)" :key="index" :src="image" alt="image"
             class="w-24 h-24 rounded-md cursor-pointer" @click="setActiveImage(image)" />
      </div>
    </div>
    <div class="flex flex-col gap-4 lg:w-2/4">
      <div>
        <h1 class="text-3xl font-bold">Настінний Турнік 120/80 см</h1>
      </div>
      <p class="text-gray-700">
        Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
      </p>
      <h6 class="text-2xl font-semibold">2700 грн</h6>
      <div class="flex flex-row items-center gap-12 flex-wrap m-auto">
          <button class="bg-gray-600 hover:bg-gray-950 text-white font-semibold py-3 px-16 rounded-xl h-full">Додати в кошик</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        img1: "/images/bars_details/first_bars.jpg",
        img2: "/images/bars_details/second_bars.jpg",
        img3: "/images/bars_details/third_bars.jpg",
      },
      activeImg: "/images/bars_details/first_bars.jpg",
      amount: 1,
    };
  },
  methods: {
    setActiveImage(image) {
      this.activeImg = image;
    },
  },
};
</script>

<style scoped>
</style>
