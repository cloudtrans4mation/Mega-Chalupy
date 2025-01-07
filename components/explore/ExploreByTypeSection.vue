<template>
  <section style="padding-bottom: 50px;"
    class="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-6 xl:px-10 py-8 mt-8 md:mt-16">
    <!-- Header -->
    <header class="text-center max-w-3xl mx-auto mb-8">
      <h2 class="text-3xl font-semibold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
        Explore by types of stays
      </h2>
      <p class="text-lg text-gray-600">Explore houses based on 10 types of stays</p>
    </header>

    <!-- Cards -->
    <main class="flex flex-wrap justify-center gap-6">
      <ul class="flex flex-wrap justify-center gap-6">
        <li v-for="(stay, index) in stayTypes" :key="index" class="card">
          <StayCard :stay="stay" />
        </li>
      </ul>
    </main>
  </section>
</template>

<style scoped>
.card {
  width: 240px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fff;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import StayCard from './StayCard.vue';

export default defineComponent({
  name: 'ExploreStays',
  components: {
    StayCard,
  },
  data() {
    return {
      stayTypes: [
        { name: 'Nature House', properties: 17288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dda802c07ec93039a49c17c46d968eb66e2b4e346c27879cba13c7f0eaaf9c2' },
        { name: 'Wooden house', properties: 2118, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a484497db371820147cb5d75d0ab5a9874879ef048097a5eaca9144adccd5e9a' },
        { name: 'Houseboat', properties: 36612, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/593ed12f2482010b0bdd94ef40f4d4c4569b60c0044d6252e242c1dd10130d4f' },
        { name: 'Farm House', properties: 188288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/424a1a71a35b28839130cb343ea0e2edbbf7ddbe43f18ee127320441d5dbb125' },
        { name: 'Dome House', properties: 188288, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c03705941583a90f0fbee07dc5101b23d2a5d1ac923254048a6531b54031d7a9' },
      ],
    };
  },
});
</script>