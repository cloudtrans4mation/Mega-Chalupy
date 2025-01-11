<script lang="ts">
import { defineComponent } from 'vue'

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default defineComponent({
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true,
      default: '10 tipů jak na výpravu "Apalucha" ?'
    },
    subtitle: {
      type: String,
      required: true,
      default: 'Zjisti zajímavé tipy na výpravu s dětmy...'
    },
    imageUrl: {
      type: String,
      required: true,
      default: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/ae7288164e471fea89c1348b7382fb06383c771dab45d58ce9663ec4cba08a5e?apiKey=5b20c0d534a34f0091744edaaeed1afd&'
    }
  }
})
</script>

<template>
  <div
    class="flex flex-col px-2.5 -mt-20 w-full text-white bg-black bg-opacity-30 min-h-[719px] max-md:max-w-full"
    role="banner"
  >
    <div class="flex flex-col w-full max-md:max-w-full">
      <div
        class="flex relative flex-col items-center px-20 pt-36 pb-10 w-full rounded-none min-h-[300px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
      >
        <img
          :src="imageUrl"
          :alt="title"
          loading="lazy"
          class="object-cover absolute inset-0 size-full"
        />
        <div 
          class="flex relative flex-col max-w-full w-[901px]"
          role="heading" 
          aria-level="1"
        >
          <div
            class="text-5xl font-extrabold leading-none max-md:max-w-full max-md:text-4xl"
          >
            {{ title }}
          </div>
          <div
            class="mt-5 text-3xl font-semibold leading-none max-md:max-w-full"
          >
            {{ subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>