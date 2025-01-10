<template>
  <article class="flex flex-col flex-1 shrink basis-0 min-h-[240px] min-w-[160px]">
    <div class="flex overflow-hidden relative flex-col justify-center items-start w-full min-h-[240px]">
      <!-- Image Section -->
      <div class="flex overflow-hidden z-0 flex-col flex-1  w-full rounded-md">
        <img
          :src="imageUrl"
          :alt="title"
          loading="lazy"
          class="object-cover w-full h-full aspect-[1.1] rounded-md"
        />
      </div>
      <!-- Gradient Overlay -->
      <div class="flex absolute inset-0 z-0 max-w-full rounded-md bg-gradient-to-t from-black/50 to-transparent"></div>
      <!-- Content Section -->
      <div class="flex absolute inset-x-0 bottom-0 z-10 flex-col p-2 w-full text-white">
        <time class="text-xs leading-tight">{{ date }}</time>
        <h2 class="mt-1 text-sm font-medium">{{ title }}</h2>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewsCard',
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
})
</script>
