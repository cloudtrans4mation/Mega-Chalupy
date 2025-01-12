<template>
  <section class="relative rounded-xl mx-auto my-12 ">
    <!-- Hero Section -->
    <FlexibleHero></FlexibleHero>

    <!-- Content Section -->
    <div class="py-12">
      <!-- Header -->
      <h2 class="text-5xl font-bold text-center mb-12 text-gray-900">
        Past Experiences
      </h2>

      <!-- Filter and Search -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <!-- Sort By -->
        <!-- <div class="flex items-center gap-4">
          <label for="sortBy" class="text-base font-medium text-gray-700">Sort by:</label>
          <select id="sortBy"
            class="px-4 py-2 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700">
            <option value="date">Date</option>
            <option value="popularity">Popularity</option>
          </select>
        </div> -->
        <!-- Search Bar -->
        <!-- <div>
          <input type="text" placeholder="Search experiences"
            class="px-4 py-3 w-72 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700" />
        </div> -->
      </div>

      <!-- Experiences Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExperienceCard v-for="(experience, index) in experiences" :key="index" :experience="experience"
          :images="experience.images"
          class="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" />
      </div>

      <!-- Load More Button -->
      <div class="mt-16 text-center">
        <button
          class="px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
          Load More
        </button>
      </div>
    </div>

    <ExperienceDiscovery></ExperienceDiscovery>

    <HostingQuestions></HostingQuestions>

  </section>
</template>

<style scoped>
/* Section Background Gradient */

/* Smooth transitions for buttons */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Card Hover Effects */
.ExperienceCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ExperienceCard:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
</style>




<script lang="ts">
import { defineComponent } from 'vue';
import ExperienceCard from './ExperienceCard.vue';
import type { Experience } from '~/types';
import FlexibleHero from '../FlexibleHero.vue';
import ExperienceDiscovery from '../ExperienceDiscovery.vue';

export default defineComponent({
  name: 'PastExperiencesSection',
  components: {
    ExperienceCard,
  },
  setup() {


    const experiences: Experience[] = [
      {
        title: 'La Belle Roman Experience',
        host: 'Amine Melliti',
        status: 'Sold out',
        images: [

          '/experiences/roman2.jpeg',
          '/experiences/romancolisuim.jpeg',
        ],
      },
      {
        title: "Czech Christmas For Couples",
        host: 'Matthew Drabek',
        status: 'Sold out',
        images: [
          '/images/christimas2.jpeg',
          '/images/couples.jpeg',
          '/images/christimas3.jpeg',
          '/images/christmas.jpeg'
        ],
      },
      {
        title: "The Plague Doctor of Prague",
        host: 'Matthew Drabek',
        status: 'Sold out',
        images: [
          '/images/plague.jpeg',
          '/images/plague2.avif',
          '/images/plague3.avif'

        ],
      },
    ];


    return {
      experiences,
    };
  },
});
</script>
