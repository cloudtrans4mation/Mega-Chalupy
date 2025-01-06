<script lang="ts">
import { defineComponent } from 'vue'

interface InspirationCard {
  id: string
  image: string
  category: string
  title: string
  aspectRatio: string
}

export default defineComponent({
  name: 'InspirationSection',
  data() {
    return {
      topCards: [
        {
          id: '1',
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/e1acfa60455896075c1eb9619a47eb37062f8675508e239d9ae2a7d03c0b5750?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          category: 'Example',
          title: 'Date at the Cottage',  // Translated
          aspectRatio: 'aspect-[1.11]'
        },
        {
          id: '2',
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/228e5ffb0bf76d3cc52bce5565d3fc158f68f84488b12291e9fbb2960725a0af?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          category: 'Example',
          title: 'Dog Friendly Accommodation',  // Translated
          aspectRatio: 'aspect-[1.11]'
        }
      ] as InspirationCard[],
      bottomCards: [
        {
          id: '3',
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/e4add9b7acf5ef76fd44f6b1323ba56e96f967c5c9711d4852eef102a6a339b6?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          category: 'Example',
          title: 'Wedding at the Cottage',  // Translated
          aspectRatio: 'aspect-[0.86]'
        },
        {
          id: '4',
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/038d323f318a966008a3b55f571ddccc3a695c7926e873aac4467589c75a47a5?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          category: 'Example',
          title: 'For Friends Party',  // Translated
          aspectRatio: 'aspect-[0.86]'
        },
        {
          id: '5',
          image: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/b1c02f9c89c4401893ab73b6cb0f3ee427bc5aeb8e4b3840196159e480047127?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          category: 'Example',
          title: 'Appalachian Expedition',  // Translated
          aspectRatio: 'aspect-[0.86]'
        }
      ] as InspirationCard[]
    }
  }
})
</script>

<template>
<section class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-[100px] flex flex-wrap items-center font-medium py-10 md:py-16 lg:py-20 rounded-2xl gap-10 md:gap-16" aria-labelledby="inspiration-title">
  <div class="flex flex-col w-full text-black max-md:max-w-full">
    <div class="flex flex-col w-full max-md:max-w-full">
      <h2 id="inspiration-title" class="text-3xl font-bold leading-normal max-md:max-w-full">
        Get Inspired <!-- Translated -->
      </h2>
      <p class="text-base max-md:max-w-full">
        Don't miss out on the latest news from the world of glamping. <!-- Translated -->
      </p>
    </div>
    <div class="flex flex-col py-4 w-full text-xs leading-loose max-md:max-w-full">
      <div class="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div v-for="card in topCards" :key="card.id" class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <img :src="card.image" :alt="card.title" loading="lazy"
            :class="['object-contain w-full rounded-xl', card.aspectRatio]" />
          <div class="flex flex-col mt-4 w-full">
            <div class="font-light">{{ card.category }}</div>
            <div class="mt-2.5 font-semibold">{{ card.title }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-10 items-start mt-4 w-full max-md:max-w-full">
        <div v-for="card in bottomCards" :key="card.id" class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <img :src="card.image" :alt="card.title" loading="lazy"
            :class="['object-contain w-full rounded-xl', card.aspectRatio]" />
          <div class="flex flex-col mt-4 w-full">
            <div>{{ card.category }}</div>
            <div class="mt-2.5 font-semibold">{{ card.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center mt-4 w-full text-base font-medium text-center text-white max-md:max-w-full">
    <button class="self-stretch px-7 py-3 bg-black rounded-xl max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" @click="$emit('browse')">
      Browse Cottages <!-- Translated -->
    </button>
  </div>
</section>

</template>

