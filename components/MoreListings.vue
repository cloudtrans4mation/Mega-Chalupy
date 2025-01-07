<script setup lang="ts">
interface MoreListingsProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

defineProps<MoreListingsProps>();
</script>

<template>
  <section
    class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-[100px] flex overflow-hidden flex-col items-start font-bold text-zinc-700 pt-12 pb-12"
    aria-labelledby="more-listings-title">
    <!-- Title and Description -->
    <h2 id="more-listings-title" class="text-2xl text-white">{{ title || 'More Listings' }}</h2>
    <p class="mt-2 text-base font-light text-white max-md:max-w-full">
      {{ description || 'Explore more listings....' }}
    </p>

    <!-- Background Image Section with Text -->
    <div
      class="relative flex flex-col justify-center items-start self-stretch px-20 py-14 mt-6 w-full text-xs uppercase rounded min-h-[310px] max-md:px-5 max-md:max-w-full"
      role="img" aria-label="Background image for More Listings">
      <!-- Background Image (Non-Transparent) -->
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fccbd3233e3b1c872c55804c7c793aaf3269768796215ff1ebba3e25d6cbe7c"
        alt="Background Image for More Listings" class="object-cover absolute inset-0 w-full h-full rounded-lg" />

      <!-- Text and Button Over the Image -->
      <div class="relative z-10 flex flex-col items-start text-left text-white">
        <h2 class="text-3xl font-semibold mb-4">{{ title || 'More Listings' }}</h2>
        <p class="mb-6">{{ description || 'Explore more listings....' }}</p>

        <!-- Button Overlaid on the Image (Aligned to the Left, Wider) -->
        <div class="mt-6">
          <a href="#learn-more"
            class="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all duration-300">
            See  the listings
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
