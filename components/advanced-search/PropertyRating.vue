<template>
  <section class="flex justify-center">

    <div             class="filter-tab flex flex-wrap justify-between items-start p-5 mt-11 w-full max-w-3xl bg-white rounded-lg  bg-blend-normal border-neutral-200 max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col w-full">
        <div class="flex flex-col pr-1 w-full bg-blend-normal">
          <h2 class="text-sm font-bold leading-none text-zinc-900">Property rating</h2>
          <p class="text-xs leading-5 text-zinc-600">Find high-quality hotels and holiday rentals</p>
        </div>
        <div class="flex flex-col mt-2.5 w-full text-sm leading-loose text-zinc-900">
          <div v-for="(rating, index) in ratings" :key="index"
            class="flex gap-2 items-start w-full bg-blend-normal min-h-[20px] mt-2.5 first:mt-0">
            <input type="checkbox" :id="rating.id"
              class="w-5 h-5 bg-white rounded border border-solid bg-blend-normal border-zinc-500" />
            <label :for="rating.id" class="bg-blend-normal w-[204px]">{{ rating.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropertyRating',
  setup() {
    const ratings = [
      { id: 'threeStars', label: '3 stars' },
      { id: 'fourStars', label: '4 stars' },
      { id: 'fiveStars', label: '5 stars' },
      { id: 'unrated', label: 'Unrated' }
    ];

    return { ratings };
  }
});
</script>