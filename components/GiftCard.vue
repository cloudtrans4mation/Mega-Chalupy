<template>
    <section class="flex flex-wrap items-center font-medium px-6 py-10 md:py-16 lg:py-20 bg-gray-50 rounded-2xl shadow-lg max-w-6xl mx-auto gap-10 md:gap-16">
      <!-- Text Container -->
      <div class="flex flex-col flex-1 shrink-0 min-w-[240px] md:basis-1/2 lg:basis-5/12 space-y-6">
        <h1 class="text-4xl md:text-5xl font-bold text-black leading-tight">
          Shop Mega Chalupy <br /> gift cards
        </h1>
        <p class="text-lg text-gray-600 md:leading-7">
          Give the gift of travel! With Mega Chalupy gift cards, your loved ones can book unforgettable experiences in amazing places around the world.
        </p>
        <a href="#learn-more" class="mt-6 inline-block">
          <span class="flex items-center gap-2 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all duration-300">
            Learn more
          </span>
        </a>
      </div>
  
      <!-- Image Container -->
      <div class="flex justify-center flex-1 shrink-0 min-w-[240px] md:basis-1/2 lg:basis-7/12">
        <img 
          loading="lazy"
          src="/megacard.png"
          alt="Mega Chalupy gift cards"
          class="object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 w-full max-w-md md:max-w-full"
        />
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
  