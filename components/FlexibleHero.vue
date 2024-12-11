<script lang="ts">
import { defineComponent } from 'vue'

interface FlexibleHeroProps {
  title: string
  buttonText: string
}

export default defineComponent({
  name: 'FlexibleHero',
  props: {
    title: {
      type: String,
      default: 'Not sure where to go? Perfect.'
    },
    buttonText: {
      type: String,
      default: "I'm flexible"
    }
  },
  setup(props: FlexibleHeroProps) {
    const handleButtonClick = () => {
      // Handle button click event
    }

    return {
      handleButtonClick
    }
  }
})
</script>

<template>
    <div
      class="flex overflow-hidden flex-col items-center px-20 pt-96 pb-20 mt-6 w-full font-medium rounded-lg min-h-[640px] max-md:px-5 max-md:pt-24 max-md:max-w-full bg-cover bg-center"
      role="banner"
      :style="`background-image: url('/lux.webp');`"
      >
      <h1
        class="text-5xl leading-none text-white max-md:max-w-full max-md:text-4xl"
      >
        {{ title }}
      </h1>
      <div class="flex items-start mt-6 text-base">
        <button
          @click="handleButtonClick"
          class="flex gap-2 justify-center items-center px-6 py-4 bg-white border-0 border border-solid shadow-sm rounded-[100px] max-md:px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          aria-label="Search with flexible dates and locations"
        >
          <span class="self-stretch my-auto bg-clip-text">{{ buttonText }}</span>
        </button>
      </div>
    </div>
  </template>
  