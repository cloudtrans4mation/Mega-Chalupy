<template>
  <section class="flex flex-col justify-center px-40 pt-6 pb-12 max-md:px-5">
    <h2 class="text-3xl font-bold leading-none text-neutral-800">
      Past experiences
    </h2>
    <div class="flex flex-wrap gap-6 items-stretch mt-6 w-full max-md:max-w-full">
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
          imageUrl: 'experiences/houseplant.jpeg',
        },
        {
          title: 'The Last Blockbuster',
          host: 'Sandi',
          status: 'Sold out',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c3d042103a0d7adbf3f265c2d7feb67fc3bb6204c604b66792e4daad5e94969?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',
        },

        {
          title: 'The Last Blockbuster',
          host: 'Sandi',
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

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  margin: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.experience-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-container {
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.image-slider {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 16px;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.card-host {
  font-size: 14px;
  color: #777;
  margin-bottom: 4px;
}

.card-status {
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

/* Customize Swiper navigation buttons */
.swiper-button-next,
.swiper-button-prev {
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 12px;
  color: #fff;
}

.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.5);
}

.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.2);
}

.swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.5);
}

.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.2);
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #fff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
