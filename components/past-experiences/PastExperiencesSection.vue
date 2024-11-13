<template>
    <section class="flex flex-col justify-center px-40 pt-6 pb-12 max-md:px-5">
      <h2 class="text-3xl font-bold leading-none text-neutral-800">
        Past experiences
      </h2>
      <div class="flex flex-wrap gap-6 items-center mt-6 w-full max-md:max-w-full">
        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
        />
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ExperienceCard from './ExperienceCard.vue';
  import type { Experience } from '~/types';
  
  export default defineComponent({
    name: 'PastExperiencesSection',
    components: {
      ExperienceCard,
    },
    setup() {
      const experiences: Experience[] = [
        {
          title: 'Spend the night in the Ferrari Museum',
          host: 'Marc Gene',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3d042103a0d7adbf3f265c2d7feb67fc3bb6204c604b66792e4daad5e94969?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
        {
          title: "Shrek's Swamp",
          host: 'Donkey',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3d042103a0d7adbf3f265c2d7feb67fc3bb6204c604b66792e4daad5e94969?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
        {
          title: "Barbie's Malibu DreamHouse, Ken's Way",
          host: 'Ken',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3e2692df285e1dfed52919a4c759a0831e730096432b9d2f2a0dd16173b5855?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
        {
          title: "Ted Lasso's Favourite Pub",
          host: 'Mae',
          status: 'Sold Out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3e2692df285e1dfed52919a4c759a0831e730096432b9d2f2a0dd16173b5855?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
        {
          title: 'Houseplant Retreat',
          host: 'Seth Rogen',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3d042103a0d7adbf3f265c2d7feb67fc3bb6204c604b66792e4daad5e94969?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
        {
          title: 'The Last Blockbuster',
          host: 'Sandi',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3d042103a0d7adbf3f265c2d7feb67fc3bb6204c604b66792e4daad5e94969?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },
      ];
  
      return {
        experiences,
      };
    },
  });
  </script>