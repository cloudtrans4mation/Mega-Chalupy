<template>
  <section style="padding-bottom: 0px;"
    class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-[100px] flex overflow-hidden flex-col items-start font-bold text-zinc-700 pt-12 pb-12"
    aria-labelledby="airbnb-plus-title"
  >
    <h1 id="airbnb-plus-title" class="text-2xl">Mega ChalupyPlus Accommodations</h1>
    <p class="mt-2 text-base font-light max-md:max-w-full">
      A selection of homes verified for quality and design standards.
    </p>
    <div
      class="flex relative flex-col justify-center items-center self-stretch px-20 py-14 mt-6 w-full text-xs uppercase rounded min-h-[310px] max-md:px-5 max-md:max-w-full"
      role="img"
      aria-label="Background image representing a Mega ChalupyPlus accommodation"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd9a0c5e591bbf7433d476543236a2a91e3d87360dbb9817b25255b3503d223b?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
        alt=""
        class="object-cover absolute inset-0 size-full"
      />
      <div class="flex relative flex-col max-w-full w-[200px]">
        <img
          loading="lazy"
          src="/logo.png"
          alt="Mega ChalupyPlus Logo"
          class="object-contain self-center max-w-full aspect-square w-[124px]"
        />
        <button
          class="flex gap-5 px-5 py-4 mt-8 bg-white rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
          type="button"
          aria-label="Explore Mega ChalupyPlus accommodations"
        >
          <span class="grow shrink w-[135px]">Explore Accommodations</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6b291bd83bddf1847960f23852e076a6b79a674d4dd422330037522820384d?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
            alt=""
            class="object-contain shrink-0 self-start aspect-[0.56] stroke-[1px] stroke-zinc-700 w-[5px]"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MegaChalupyPlusHero',
});
</script>
