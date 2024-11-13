<template>
    <section class="px-4 py-6 sm:px-8 md:px-12 lg:px-16 bg-white text-black">
      <header class="flex flex-col space-y-1">
        <!-- Dynamic Title and Subtitle Section -->
        <div :class="`${center ? 'text-center' : 'text-start'}`">
          <h1 class="text-3xl font-bold leading-tight">
            {{ title }}
          </h1>
        </div>
  
        <!-- Property Details Section (Directly Below the Title) -->
        <div class="flex flex-wrap items-center justify-between text-sm mt-2">
          <!-- Ratings and Location -->
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45741a4f68ed5bf3cd2e97756ca5f4f158a89eebd516d72bd71547dc37bfd19?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Star Icon"
                class="w-4 h-4"
              />
              <span>5.0</span>
            </div>
            <a href="#reviews" class="underline">7 reviews</a>
            <div class="flex items-center gap-2 text-gray-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1162eb8ee62f8ae01a1ccad66338a1ae042073f1ad4aa6e543ec0aa629f10b85?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Superhost Icon"
                class="w-4 h-4"
              />
              <span>Superhost</span>
            </div>
            <a href="#location" class="text-gray-500 underline">
              {{ subTitle }}
            </a>
          </div>
  
          <!-- Action Links (Share and Save) -->
          <div class="flex gap-4 text-black">
            <a class="flex items-center gap-1 cursor-pointer hover:underline" @click="shareProperty">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20242f213dd9d7afd719f1de27156ebe8479261606af202808d7d7b66456e7fb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Share Icon"
                class="w-4 h-4"
              />
              <span>Share</span>
            </a>
            <a class="flex items-center gap-1 cursor-pointer hover:underline" @click="saveProperty">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c070cdf2a1a3d989c1bd587a9529e53d3db60e59d55671b373ac63695a746269?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Save Icon"
                class="w-4 h-4"
              />
              <span>Save</span>
            </a>
          </div>
        </div>
      </header>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  type HeadingProps = {
    title: string
    subTitle?: string
    center?: boolean
    danger?: boolean
  }
  
  const { title, subTitle, center, danger } = defineProps<HeadingProps>();
  
  const subtitleClasses = computed(() =>
    `mt-2 ${danger ? 'text-red-600 font-semibold' : 'font-light text-neutral-500'}`,
  );
  
  // Dummy implementation for share and save actions
  function shareProperty() {
    alert("Property shared!");
  }
  
  function saveProperty() {
    alert("Property saved!");
  }
  </script>
  
  <style scoped>
  /* General padding and font adjustments */
  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  /* Responsive padding adjustments */
  @media (min-width: 640px) {
    section {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
  </style>
  