<script lang="ts">
import { defineComponent } from 'vue'

interface BenefitItem {
  id: number
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export default defineComponent({
  name: 'BenefitCards',
  data() {
    return {
      benefits: [
        {
          id: 1,
          title: 'In the Comfort of Your Home',
          description: 'Transparent pricing of services. Transparent pricing.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/029f0d0e10be39622260c4087c2239160bfc8073a82f456223ef4bfd00659e47?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Home comfort services icon'
        },
        {
          id: 2,
          title: 'Secure',
          description: 'Transparent pricing of services. Transparent pricing.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/4833f052941409f78e4b64428cb5aff82fd3c52d6bbf4d52312fda9453b41848?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Security services icon'
        },
        {
          id: 3,
          title: 'Transparent Service Pricing',
          description: 'Transparent pricing of services. Transparent pricing.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/c46919924c9f93c3a150331dcf19f495b618cf0a3f0959d3c2add9117243cba0?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Pricing services icon'
        },
        {
          id: 4,
          title: 'For the Whole Family',
          description: 'Suitable for every family.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/bf3908ecc6320f5658bfd9cd3d4479de1236d61046fafd2b4a89a539286631b6?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Family services icon'
        }
      ] as BenefitItem[]
    }
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-8 justify-center items-center py-6 px-6">
    <div
      v-for="benefit in benefits"
      :key="benefit.id"
      class="flex flex-col flex-1 shrink basis-[260px] items-center text-center"
    >
      <!-- Icon container -->
      <div
        class="flex gap-2 items-center justify-center p-6 bg-black rounded-3xl w-[96px] h-[96px] min-h-[96px]"
        role="img"
        :aria-label="benefit.title"
      >
        <img
          :src="benefit.imageUrl"
          :alt="benefit.imageAlt"
           
          class="object-contain w-[60px] h-[60px]"
        />
      </div>
      <!-- Text container -->
      <div
        class="flex flex-col mt-4 leading-5 text-black max-w-[280px] px-2"
      >
        <div class="text-lg font-semibold tracking-normal">
          {{ benefit.title }}
        </div>
        <div class="text-sm tracking-normal">
          {{ benefit.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure responsive and centered alignment */
.flex {
  display: flex;
}
</style>
