<template>
  <section class="flex flex-col font-semibold text-center" aria-label="Image Gallery">
    <NuxtImg
        v-if="parsedImages[0]"
        provider="cloudinary"
        sizes="100vw sm:80vw md:60vw lg:50vw"
        :src="parsedImages[0]"
        :alt="`Main Image of ${listing.title}`"
        format="webp"
        class="object-cover w-full h-96 transition-transform duration-300 transform hover:scale-110 rounded-xl"
      />
    <div class="flex flex-wrap justify-between mt-5 w-full max-md:max-w-full">
      <div
        class="flex flex-wrap flex-1 shrink gap-2.5 h-full text-4xl leading-5 basis-[100px] min-w-[240px] text-neutral-800 max-md:max-w-full"
        role="list"
      >

      <NuxtImg
        provider="cloudinary"
        tabindex="0"

        sizes="100vw sm:80vw md:60vw lg:50vw"
        :src="parsedImages[1]"
        :alt="`Main Image of ${listing.title}`"
        format="webp"
        class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.32] basis-0 w-[212px]"/>

  
        <NuxtImg
        provider="cloudinary"
        tabindex="0"
        sizes="100vw sm:80vw md:60vw lg:50vw"
        :src="parsedImages[2]"
        :alt="`Main Image of ${listing.title}`"
        format="webp"
        class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.32] basis-0 w-[212px]"/>


        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/01699fb66170dac75e08029090bfffe944bceb65f363028fe21635d36b12c28b?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
          class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.32] basis-0 w-[212px]"
          alt="Gallery thumbnail 3"
          role="listitem"
          tabindex="0"
        />
      </div>
    </div>
  </section>

</template>



<script lang="ts">
import { defineComponent } from 'vue';
import ProceedToPaymentFromListing from './ProceedToPaymentFromListing.vue';

export default defineComponent({
  name: 'CombinedGallery',
  components: {
    ProceedToPaymentFromListing,
  },
  props: {
    // Accept the listing object as a prop from the parent component
    listing: {
      type: Object as () => { imageSrc: string | string[] },
      required: true,
    },
  },
  computed: {
    parsedImages(): string[] {
      if (Array.isArray(this.listing.imageSrc)) {
        return this.listing.imageSrc; // Return as-is if it's already an array
      }

      if (typeof this.listing.imageSrc === 'string') {
        try {
          // Step 1: Decode the URL-encoded string
          const decodedStr = decodeURIComponent(this.listing.imageSrc);

          // Step 2: Remove unnecessary characters {, }, and "
          const cleanedStr = decodedStr.replace(/[{}"]/g, '');

          // Step 3: Split by commas if there are multiple URLs and trim whitespace
          const imageUrls = cleanedStr.split(',').map(url => url.trim());

          // Optional: Filter out any empty strings resulting from the split
          return imageUrls.filter(url => url.length > 0);
        } catch (error) {
          console.error('Error decoding imageSrc:', error);
          return []; // Return an empty array in case of an error
        }
      }

      // If imageSrc is neither an array nor a string, return an empty array
      return [];
    },
  },
});
</script>



<style scoped>
/* Additional styling if needed */
</style>
