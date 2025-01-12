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
    role="banner" :style="`background-image: url('/lux.webp');`">
    <h1 class="text-5xl leading-none text-white max-md:max-w-full max-md:text-4xl">
      {{ title }}
    </h1>
    <div class="flex flex-col items-center mt-4 w-full text-base font-medium text-center text-white max-md:max-w-full">
      <button
        class=" px-7 py-3 bg-black rounded-xl max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        @click="$emit('browse')">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>