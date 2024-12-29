<template>
  <div ref="regionSearch" class="region-search-container p-4">
    <h2 class="region-search-title text-2xl font-bold text-center mb-6">
      Search by region
    </h2>

    <div class="region-buttons-container grid gap-3">
      <!-- First Row -->
      <div
        class="region-buttons-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
      >
        <button
          v-for="(region, index) in regions.slice(0, 3)"
          :key="index"
          class="region-button bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
          @click="selectDestination(region.name)"
        >
          <img
            :src="region.imageSrc"
            :alt="region.name"
            class="region-image w-full h-16 object-contain"
          />
          <div class="region-name text-center p-2 text-sm font-medium">
            {{ region.name }}
          </div>
        </button>
      </div>

      <!-- Second Row -->
      <div
        class="region-buttons-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
      >
        <button
          v-for="(region, index) in regions.slice(3)"
          :key="index + 3"
          class="region-button bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
          @click="selectDestination(region.name)"
        >
          <img
            :src="region.imageSrc"
            :alt="region.name"
            class="region-image w-full h-16 object-contain"
          />
          <div class="region-name text-center p-2 text-sm font-medium">
            {{ region.name }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.region-search-container {
  max-width: 1200px;
  margin: 0 auto;
}

.region-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.region-button:hover {
  transform: scale(1.05);
}

.region-image {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.region-name {
  margin-top: 0.5rem;
}
</style>




<script lang="ts">
import { defineComponent } from 'vue';

interface Region {
  imageSrc: string;
  name: string;
}

export default defineComponent({
  name: 'RegionSearch',
  emits: ['destination-selected'],
  setup(_, { emit }) {
    const regions = [
      { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/%C4%8Cechy_po_roce_1920_na_map%C4%9B_%C4%8Ceska.png/290px-%C4%8Cechy_po_roce_1920_na_map%C4%9B_%C4%8Ceska.png', name: 'Bohemia' },
      { imageSrc: '/morava.png', name: 'Morava' },
      { imageSrc: 'https://1.bp.blogspot.com/-AgSHpMuDkF4/VIbn-dnE-4I/AAAAAAAAKYI/Kynut-ufrxk/s1600/17_N%C4%9Bkdej%C5%A1%C3%AD%2BSlezsk%C3%A1%2Bexpozitura%2Bzem%C4%9B%2BMoravskoslezsk%C3%A9%2Bna%2Bmap%C4%9B%2Bdne%C5%A1n%C3%AD%2B%C4%8Cesk%C3%A9%2Brepubliky.png', name: 'Silesia' },
    ] as Region[];

    const selectDestination = (destination: string) => {
      emit('destination-selected', destination);
    };

    return {
      regions,
      selectDestination
    };
  }
});
</script>
