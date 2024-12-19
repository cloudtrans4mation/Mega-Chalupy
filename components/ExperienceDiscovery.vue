<script setup lang="ts">
import ExperienceCardForDiscovery from "./ExperienceCardForDiscovery.vue";
</script>

<template>
  <div class="flex flex-col font-medium">
    <h1 class="text-4xl leading-none text-black max-md:max-w-full">
      Discover Mega Chalupy Experiences
    </h1>
    <div class="flex flex-wrap gap-6 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <ExperienceCardForDiscovery title="Things to do" subtitle="on your trip" buttonText="Experiences"
      image="/experiences/romancolisuim.jpeg"  />

      <ExperienceCardForDiscovery title="Things to do" subtitle="from home" buttonText="Online Experiences"
      image="/experiences/food.jpeg"  />

      <ExperienceCardForDiscovery title="Things to do" subtitle="by the beach" buttonText="Coastal Activities"
        image="/experiences/kevin.jpeg" />

      <ExperienceCardForDiscovery title="Things to do" subtitle="in the city" buttonText="Urban Adventures"
        image="/images/christmas.jpeg" />




    </div>
  </div>
</template>