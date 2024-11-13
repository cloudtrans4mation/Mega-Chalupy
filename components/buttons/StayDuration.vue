<template>
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-xl font-semibold">Quelle sera la durée de votre séjour ?</h2>
      <div class="flex justify-center gap-4 mt-4">
        <button
          :class="{ 'border-2 border-black font-semibold': selectedDuration === 'Un week-end' }"
          class="px-4 py-2 text-black border border-gray-300 rounded-full hover:bg-gray-200"
          @click="selectDuration('Un week-end')"
        >
          Un week-end
        </button>
        <button
          :class="{ 'border-2 border-black font-semibold': selectedDuration === 'Une semaine' }"
          class="px-4 py-2 text-black border border-gray-300 rounded-full hover:bg-gray-200"
          @click="selectDuration('Une semaine')"
        >
          Une semaine
        </button>
        <button
          :class="{ 'border-2 border-black font-semibold': selectedDuration === 'Un mois' }"
          class="px-4 py-2 text-black border border-gray-300 rounded-full hover:bg-gray-200"
          @click="selectDuration('Un mois')"
        >
          Un mois
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedDuration = ref('Un week-end');
  
  function selectDuration(duration) {
    selectedDuration.value = duration;
  }
  </script>
  