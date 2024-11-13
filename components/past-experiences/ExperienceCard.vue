<template>
    <article class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[211px]">
      <div class="flex overflow-hidden flex-col justify-between p-4 w-full rounded-lg max-w-[264px] min-h-[264px]">
        <div class="flex gap-2.5 items-start w-full">
          <button class="flex gap-2.5 justify-center items-center px-1.5 w-7 h-7 bg-white bg-opacity-80 rounded-[100px]" aria-label="Share">
            <img :src="experience.imageUrl" alt="" class="object-contain self-stretch my-auto w-4 aspect-square" />
          </button>
        </div>
        <div class="flex gap-2.5 justify-center items-end mt-52 w-full max-md:mt-10">
          <div class="flex gap-1 min-h-[4px]"></div>
        </div>
      </div>
      <div class="flex flex-col mt-3 w-full text-sm leading-none">
        <h3 class="font-bold text-neutral-700">{{ experience.title }}</h3>
        <p class="text-neutral-500">Hosted by {{ experience.host }}</p>
        <p class="font-semibold text-neutral-800">{{ experience.status }}</p>
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Experience } from '~/types';
  
  export default defineComponent({
    name: 'ExperienceCard',
    props: {
      experience: {
        type: Object as PropType<Experience>,
        required: true,
      },
    },
  });
  </script>