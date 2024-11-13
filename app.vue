<script setup lang="ts">
import RoomAmenities from './components/host-special/RoomAmenities.vue';

useSeoMeta({
  titleTemplate: titleChunk => {
    return titleChunk
      ? `${titleChunk} | Mega Chalupy`
      : 'Mega Chalupy - Your Ultimate Vacation Rental Experience'
  },
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  description:
    'Discover your ultimate vacation rental experience with Mega Chalupy. Find stunning accommodations, seamless user experiences, and high-quality, performance-driven solutions for your next getaway.',
  keywords:
    'vacation rental, accommodation, travel, holiday, getaway, rental property, rental home',
  author: 'Mohamed Amine Melliti',
  ogType: 'website',
  ogSiteName: 'Mega Chalupy',
  ogUrl: 'https://www.Mega Chalupy.atalek.com/',
  ogTitle: 'Mega Chalupy - Your Ultimate Vacation Rental Experience',
  ogDescription:
    'Discover your ultimate vacation rental experience with Mega Chalupy. Find stunning accommodations, seamless user experiences, and high-quality, performance-driven solutions for your next getaway.',
  ogImage:
    'https://res.cloudinary.com/dkofkuquf/image/upload/v1696861373/nuxtshop/milpepaqvyylyl9yk9vm.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dkofkuquf/image/upload/v1696861373/nuxtshop/milpepaqvyylyl9yk9vm.png',
  twitterTitle: 'Mega Chalupy - Your Ultimate Vacation Rental Experience',
  twitterDescription:
    'Discover your ultimate vacation rental experience with Mega Chalupy. Find stunning accommodations, seamless user experiences, and high-quality, performance-driven solutions for your next getaway.',
})
</script>

<template>

  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
:root {
  font-family: "Montserrat", sans-serif;
  font-size:small;
}
</style>
