<template>
  <div class="max-w-7xl mx-auto p-8">
  <div class="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
    <div class="flex flex-col gap-6 lg:w-2/4">
      <img :src="activeImg" alt="" class="w-full h-full aspect-square object-cover rounded-xl" />
      <div class="flex flex-row justify-between h-24">
        <img v-for="(image, index) in Object.values(images)" :key="index" :src="image" alt="" class="w-24 h-24 rounded-md cursor-pointer" @click="setActiveImage(image)" />
      </div>
    </div>
    <!-- ABOUT -->
    <div class="flex flex-col gap-4 lg:w-2/4">
      <div>
        <span class="text-violet-600 font-semibold">Special Sneaker</span>
        <h1 class="text-3xl font-bold">Nike Invincible 3</h1>
      </div>
      <p class="text-gray-700">
        Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
      </p>
      <h6 class="text-2xl font-semibold">$ 199.00</h6>
      <div class="flex flex-row items-center gap-12">
        <div class="flex flex-row items-center">
          <button class="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl" @click="decrementAmount">-</button>
          <span class="py-4 px-6 rounded-lg">{{ amount }}</span>
          <button class="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl" @click="incrementAmount">+</button>
        </div>
        <button class="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">Add to Cart</button>
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
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      },
      activeImg: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      amount: 1,
    };
  },
  methods: {
    setActiveImage(image) {
      this.activeImg = image;
    },
    decrementAmount() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
    incrementAmount() {
      this.amount++;
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
