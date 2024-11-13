<template>
    <section class="flex flex-col font-semibold text-center">
      <!-- Main Image Section -->
  
  
      <!-- Replaced Thumbnail Grid Section from Second Component -->
      <div class="flex overflow-hidden flex-wrap gap-2 rounded-2xl mt-5 w-full max-md:max-w-full">
        <!-- Large Image in Grid -->
        <img loading="lazy" :src="mainImageSrc" alt="Large image in grid" class="object-contain flex-1 shrink w-full aspect-[1.39] basis-0 min-w-[240px] max-md:max-w-full" />
  
        <!-- Thumbnail Rows -->
        <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div class="flex flex-wrap flex-1 gap-2 w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/869d2ba2c502006f97ac6934539ae7b00f3c7d28f3ea5a9caae62010a44a9efd?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="Image in top row" class="object-contain flex-1 shrink aspect-[1.4] basis-0 min-w-[240px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8fcf4ca1aca3d1486c5bf8514558ac44c3300eb5026eff99f48ffda07235e6?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="Image in top row" class="object-contain flex-1 shrink aspect-[1.4] basis-0 min-w-[240px]" />
          </div>
          <div class="flex flex-wrap flex-1 gap-2 mt-2">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d92fc5c8fae65e370360c78e3212478c2a98f47425574f5028254db538dd38?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="Image in bottom row" class="object-contain flex-1 shrink aspect-[1.4] basis-0 min-w-[240px]" />
            <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] relative items-start px-16 pt-36 pb-6 w-full aspect-[1.398] max-md:px-5 max-md:pt-24">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/576147ebab4097b23957102ef03d8a2065813fac7acc7995a8b1968511439320?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="Background image for button" class="object-cover absolute inset-0 size-full" />
              <button class="flex gap-2 justify-center items-center px-4 py-2 bg-white rounded-lg border border-black border-solid shadow-sm relative">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f6a7eaf3a5efc939b47531ace8d2b83796379b911ea13e81edda54e7535adc6?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="" class="object-contain shrink-0 my-auto w-5 aspect-square" />
                <span>Show all photos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Proceed to Payment Button -->
      <ProceedToPaymentFromListing />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ProceedToPaymentFromListing from './ProceedToPaymentFromListing.vue';
  
  export default defineComponent({
    name: 'CombinedGallery',
    components: {
      ProceedToPaymentFromListing,
    },
    props: {
      mainImageSrc: {
        type: String,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  