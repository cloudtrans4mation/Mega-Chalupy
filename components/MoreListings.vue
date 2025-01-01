<template>
  <section class="relative flex flex-col items-start p-8 md:px-12 mx-auto max-w-[2520px] rounded-2xl min-h-[376px] bg-white shadow-lg overflow-hidden mt-14">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent rounded-2xl"></div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fccbd3233e3b1c872c55804c7c793aaf3269768796215ff1ebba3e25d6cbe7c"
      alt="Listings background image"
      class="object-cover absolute inset-0 w-full h-full rounded-2xl opacity-80 transform transition-transform duration-500 ease-in-out hover:scale-105"
    />

    <!-- Content Overlay -->
    <div class="relative z-10 text-left text-white max-w-lg space-y-6">
      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight shadow-md">
        Discover More Listings
      </h2>
      <p class="text-lg md:text-xl text-gray-200">
        Explore a wider range of listings that might interest you. From cozy cottages to modern apartments, we have something for everyone.
      </p>

      <button
        class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
        @click="seeListings"
      >
        See the Listings
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreListings',
  methods: {
    seeListings() {
      console.log('Navigating to listings...');
      // Implement navigation logic here
    },
  },
});
</script>

<style scoped>
section {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 0.9));
}
</style>
