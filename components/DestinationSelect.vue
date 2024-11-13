<template>
  <div ref="regionSearch" class="region-search-container">
    <h2 class="region-search-title">Search by region</h2>

    <div class="region-buttons-container">
      <div class="region-buttons-row">
        <button
          v-for="(region, index) in regions.slice(0, 3)"
          :key="index"
          class="region-button"
          @click="selectDestination(region.name)"
        >
          <img
            :src="region.imageSrc"
            :alt="region.name"
            class="region-image"
          />
          <div class="region-name">{{ region.name }}</div>
        </button>
      </div>

      <div class="region-buttons-row">
        <button
          v-for="(region, index) in regions.slice(3)"
          :key="index + 3"
          class="region-button"
          @click="selectDestination(region.name)"
        >
          <img
            :src="region.imageSrc"
            :alt="region.name"
            class="region-image"
          />
          <div class="region-name">{{ region.name }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.region-search-container {
  display: flex;
  flex-direction: column;
  color: black;
  min-width: 240px;
  padding: 16px;
  background-color: #white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.region-search-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.region-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.region-buttons-row {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
}

.region-button {
  display: flex;
  flex-direction: column;
  width: 124px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.region-button:hover {
  background-color: #e0e0e0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.region-image {
  object-fit: contain;
  width: 100%;
  aspect-ratio: 1;
}

.region-name {
  margin-top: 8px;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
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
