<script setup lang="ts">
import { ImageProps } from './types';

const images: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/ee1dc7b11e89326424e29c988ea86cedde643d695862f0250910eb541bf97f38?apiKey=5b20c0d534a34f0091744edaaeed1afd&",
    alt: "Taylor Swift concert venue in Europe"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/48ac468d28f4585dc386d8c639b512f4a1ecccf470811d12fd445691232ef80c?apiKey=5b20c0d534a34f0091744edaaeed1afd&",
    alt: "European tour destination highlight"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/55549d4b7d8b207aedbc465bff9d07421a8243cc229b4d7bd6acbf740217f607?apiKey=5b20c0d534a34f0091744edaaeed1afd&",
    alt: "Swiftie fan gathering location"
  }
];
</script>

<template>
  <div class="flex flex-wrap gap-4 items-center py-8 mt-14 w-full border-t border-b border-solid border-y-black border-y-opacity-10 max-md:mt-10 max-md:max-w-full">
    <div v-for="(image, index) in images" :key="index" class="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto rounded-xl border border-solid basis-0 border-black border-opacity-10 min-w-[240px]">
      <img :src="image.src" :alt="image.alt"   class="object-contain max-w-full aspect-[1.76] w-[390px]" />
    </div>
  </div>
</template>