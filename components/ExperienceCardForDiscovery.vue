<script setup lang="ts">
// Define the expected props structure if not defined in ExperienceTypes
interface ExperienceCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

defineProps<ExperienceCardProps>();
</script>

<template>
  <div
    class="custom-card relative flex flex-col justify-between p-10 rounded-2xl shadow-lg text-white overflow-hidden max-md:p-6"
  >
    <!-- Background overlay for better text contrast -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>

    <!-- Card Content -->
    <div class="relative z-10">
      <div class="text-5xl font-bold leading-tight max-md:text-3xl max-md:leading-snug">
        {{ title }}<br />{{ subtitle }}
      </div>
    </div>

    <!-- Button Section -->
    <div
      class="relative z-10 mt-6 flex items-center"
      :class="{ 'whitespace-nowrap': buttonText && buttonText.length > 15 }"
    >
      <button
        class="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200 ease-in-out max-md:px-6 max-md:py-3"
        tabindex="0"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  background-image: url('/experiences/bar.jpeg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px; /* Adjust the height as needed */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Ensure the card adapts beautifully to smaller screens */
@media (max-width: 768px) {
  .custom-card {
    height: auto;
    background-size: contain;
    background-position: center;
  }
}
</style>
