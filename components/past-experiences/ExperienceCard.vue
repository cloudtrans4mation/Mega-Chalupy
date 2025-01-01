<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Experience } from '~/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
    images: {
      type: Array as PropType<string[]>,  // Accept an array of strings (URLs of images)
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<template>
  <article class="experience-card">
    <div class="card-container">
      <div class="image-slider">
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :lazy="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" loading="lazy" />
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3 class="card-title">{{ experience.title }}</h3>
          <p class="card-host">Hosted by {{ experience.host }}</p>
        </div>
        <div class="card-footer">
          <p class="card-status">{{ experience.status }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

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

/* Custom Navigation Buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-color: rgba(255, 255, 255, 0.8);
  /* White with transparency */
  color: #000;
  /* Black arrow */
  width: 25px;
  height: 25px;
  border-radius: 50%;
  /* Circular buttons */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next) {
  right: 10px; /* Adjust the position from the right */
}

:deep(.swiper-button-prev) {
  left: 10px; /* Adjust the position from the left */
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background-color: rgba(255, 255, 255, 1);
  /* Solid white on hover */
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 14px;
  /* Smaller arrow */
  font-weight: bold;
}

/* Custom Pagination Dots */
:deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3);
  /* Inactive dot: grayish */
  opacity: 1;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #000;
  /* Active dot: black */
  width: 10px;
  height: 10px;
  transform: scale(1.2);
  /* Slightly enlarge active dot */
}
</style>

