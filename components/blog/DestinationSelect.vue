<script setup lang="ts">
import { DestinationProps } from '~/data/types';

const destinations: DestinationProps[] = [
  {
    title: "Nejlepší destinace",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/063903297d2fa1eb5d145bfc992163d22cbe8079dce859684d71a1702a25eed0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
  },
  {
    title: "Nejlepší destinace",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/063903297d2fa1eb5d145bfc992163d22cbe8079dce859684d71a1702a25eed0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
  },
  {
    title: "Nejlepší destinace",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/063903297d2fa1eb5d145bfc992163d22cbe8079dce859684d71a1702a25eed0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
  },
  {
    title: "Nejlepší destinace",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/063903297d2fa1eb5d145bfc992163d22cbe8079dce859684d71a1702a25eed0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
  }
];
</script>

<template>
  <div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
    <h2 class="text-3xl font-bold tracking-tighter leading-none max-md:max-w-full">
      Prozoumejte nabídku MEGA chalupy
    </h2>
    <div class="flex flex-col mt-6 w-full text-lg font-semibold tracking-normal leading-none max-md:max-w-full">
      <div v-for="(destination, index) in destinations" :key="index" class="flex flex-wrap gap-10 justify-between items-center py-1.5 pr-1.5 mt-8 w-full max-md:max-w-full" :class="{ 'mt-0': index === 0 }">
        <div class="self-stretch my-auto">{{ destination.title }}</div>
        <img :src="destination.iconSrc"  loading="lazy" class="object-contain shrink-0 self-stretch my-auto w-6 aspect-[2]" />
      </div>
    </div>
  </div>
</template>