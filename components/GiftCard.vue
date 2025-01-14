<template>
  <section
    class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-[100px] flex flex-wrap items-center font-medium py-10 md:py-16 lg:py-20  rounded-2xl gap-10 md:gap-16">
    <!-- Text Container -->
    <div class="flex flex-col flex-1 shrink-0 min-w-[240px] md:basis-1/2 lg:basis-5/12 space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold text-black leading-tight">
        Shop Mega Chalupy <br /> gift cards
      </h1>
      <p class="text-lg text-gray-600 md:leading-7">
        Give the gift of travel! With Mega Chalupy gift cards, your loved ones can book unforgettable experiences in
        amazing places around the world.
      </p>
      <div class="mt-6">
        <a href="#learn-more"
          class="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all duration-300">
          Learn more
        </a>
      </div>
    </div>

    <!-- Image Container -->
    <div class="flex justify-center flex-1 shrink-0 min-w-[240px] md:basis-1/2 lg:basis-7/12">
      <img   src="/megacard.png" alt="Mega Chalupy gift cards"
        class="object-cover rounded-lg transition-transform transform hover:scale-105 duration-300 w-full max-w-7xl" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GiftCardComponent',
});
</script>

<style scoped>
/* Additional styling for larger screens, if needed */
</style>
