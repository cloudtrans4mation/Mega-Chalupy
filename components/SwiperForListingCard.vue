<template>
    <Swiper
      :modules="[EffectCards]"
      effect="cards"
      class="mySwiper"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <NuxtImg
        provider="cloudinary"
        sizes="100vw sm:80vw md:350px"
        :src="slide.src"
        :alt="`Image of ${slide.title || `Slide ${index + 1}`}`"
        format="webp"
        class="absolute inset-0 w-full h-full object-cover rounded-lg"
      />      </SwiperSlide>
    </Swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import { EffectCards } from 'swiper/modules';
  
  const slides = [
    { src: 'public/mer.webp' },
    { src: '/mer.webp' },
    { src: '/mer.webp' }
  ];
  </script>
  
  <style scoped>
  .mySwiper {
    width: 300px;
    height: 400px;
  }
  </style>
  