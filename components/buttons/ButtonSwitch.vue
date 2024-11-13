<template>
    <div class="flex justify-center items-center gap-2.5 p-1 text-sm font-medium text-black bg-gray-200 rounded-full">
      <button
        :class="{ 'bg-white border border-gray-300 shadow-md': selectedButton === 'Dates' }"
        class="px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-200"
        @click="selectButton('Dates')"
      >
        Dates
      </button>
      <button
        :class="{ 'bg-white border border-gray-300 shadow-md': selectedButton === 'Mois' }"
        class="px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-200"
        @click="selectButton('Mois')"
      >
        Mois
      </button>
      <button
        :class="{ 'bg-white border border-gray-300 shadow-md': selectedButton === 'Flexible' }"
        class="px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-200"
        @click="selectButton('Flexible')"
      >
        Flexible
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedButton = ref('Dates');
  
  function selectButton(button) {
    selectedButton.value = button;
  }
  </script>
  