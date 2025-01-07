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
          title: 'V Pohodlí Domova',
          description: 'Transparetni cenik sluzeTransparetni cenik.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/029f0d0e10be39622260c4087c2239160bfc8073a82f456223ef4bfd00659e47?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Home comfort services icon'
        },
        {
          id: 2,
          title: 'Zabezpečené',
          description: 'Transparetni cenik sluzebTransparetni cenik.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/4833f052941409f78e4b64428cb5aff82fd3c52d6bbf4d52312fda9453b41848?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Security services icon'
        },
        {
          id: 3,
          title: 'Transparetní ceník služeb',
          description: 'Transparetni cenik sluzebTransparetni ceni.',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/c46919924c9f93c3a150331dcf19f495b618cf0a3f0959d3c2add9117243cba0?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Pricing services icon'
        },
        {
          id: 4,
          title: 'Pro celou Rodinu',
          description: 'Vhodny pro kazdou rodinu. ou roou roou ro',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/bf3908ecc6320f5658bfd9cd3d4479de1236d61046fafd2b4a89a539286631b6?apiKey=5b20c0d534a34f0091744edaaeed1afd&',
          imageAlt: 'Family services icon'
        }
      ] as BenefitItem[]
    }
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-10 justify-center py-4">
    <div
      v-for="benefit in benefits"
      :key="benefit.id"
      class="flex flex-col flex-1 shrink basis-0"
      :class="{ 'items-start': benefit.id === 4 }"
    >
      <div
        class="flex gap-2.5 items-center p-5 w-24 h-24 bg-black rounded-3xl min-h-[96px]"
        role="img"
        :aria-label="benefit.title"
      >
        <img
          :src="benefit.imageUrl"
          :alt="benefit.imageAlt"
          loading="lazy"
          class="object-contain self-stretch my-auto aspect-square w-[60px]"
        />
      </div>
      <div
        class="flex flex-col mt-5 leading-5 text-black"
        :class="benefit.id === 4 ? 'max-w-full w-[265px]' : 'w-full'"
      >
        <div class="text-lg font-semibold tracking-normal">
          {{ benefit.title }}
        </div>
        <div class="text-xs tracking-normal">
          {{ benefit.description }}
        </div>
      </div>
    </div>
  </div>
</template>