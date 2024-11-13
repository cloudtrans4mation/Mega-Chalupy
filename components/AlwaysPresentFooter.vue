<template>
  <footer style="z-index:1000" class="fixed bottom-0 w-full bg-white border-t border-gray-300 shadow-sm py-4">
    <div class="container mx-auto flex justify-between items-center px-4 md:px-8 text-gray-900 text-sm">
      
      <!-- Left Section: Copyright and Links -->
      <div class="flex flex-wrap items-center gap-4">
        <span>&copy; 2024 Mega Chalupy, Inc.</span>
        <span class="hidden md:inline">·</span>
        <a href="#" class="hover:underline text-black">Privacy</a>
        <span class="hidden md:inline">·</span>
        <a href="#" class="hover:underline text-black">Terms and Conditions</a>
        <span class="hidden md:inline">·</span>
        <span class="hidden md:inline">·</span>
        <a href="#" class="hover:underline text-black">How the site works</a>
      </div>

      <!-- Right Section: Language, Currency, and Support -->
      <div class="flex items-center gap-4">
        <!-- Language Selector -->
        <button class="flex items-center gap-1 hover:underline text-black">
          English
        </button>

        <!-- Currency Selector -->
        <span class="hover:underline text-black">€ EUR</span>

        <!-- Assistance and Resources Dropdown -->
        <div class="relative">
          <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Help Center</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Support</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
/* Ensure the footer remains at the bottom on mobile and other screens */
.container {
  max-width: 1280px;
}
</style>
