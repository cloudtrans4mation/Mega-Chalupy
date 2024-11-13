<template>
  <div class="w-full max-w-2xl mx-auto p-6 space-y-8">
    <!-- Title Section -->
    <div class="text-center">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        Getting Started on Mega Chalupy is Easy
      </h1>
      <p class="text-base md:text-lg text-gray-600">
        Follow these simple steps to create a listing in no time.
      </p>
    </div>

    <!-- Steps List -->
    <div class="space-y-10">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex flex-col md:flex-row items-start gap-4 border-b border-gray-200 pb-6"
      >
        <!-- Step Icon -->
        <div class="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <img :src="step.icon" :alt="step.title" class="w-full h-full object-contain" />
        </div>

        <!-- Step Content -->
        <div class="flex flex-1 flex-col md:flex-row gap-4 md:gap-6">
          <!-- Step Number -->
          <div class="text-2xl md:text-3xl font-bold text-gray-700">
            {{ index + 1 }}
          </div>
          <div>
            <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {{ step.title }}
            </h2>
            <p class="text-sm md:text-base text-gray-700">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GettingStarted',
  setup() {
    const steps = [
      {
        title: 'Tell Us About Your Place',
        description:
          'Provide us with some basic information, such as where it is located and how many guests it can accommodate.',
        icon: 'https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg',
      },
      {
        title: 'Make Your Listing Stand Out',
        description:
          'Add at least 1 photo, a title, and a description. We will help you with this.',
        icon: 'https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg',
      },
      {
        title: 'Finish and Publish',
        description:
          'Choose a starting price, check a few details, and then publish your listing.',
        icon: 'https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg',
      },
    ];

    return {
      steps,
    };
  },
});
</script>

<style scoped>
/* No additional styles are necessary; all adjustments are handled by Tailwind classes */
</style>
