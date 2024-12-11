<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue"; 
</script>

<template>
  <div class="flex flex-col font-medium">
    <h1 class="text-4xl leading-none text-black max-md:max-w-full">
      Discover Airbnb Experiences
    </h1>
    <div
      class="flex flex-wrap gap-6 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full"
    >
      <ExperienceCard
        title="Things to do"
        subtitle="on your trip"
        buttonText="Experiences"
      />
      <ExperienceCard
        title="Things to do"
        subtitle="from home"
        buttonText="Online Experiences"
      />
    </div>
  </div>
</template>