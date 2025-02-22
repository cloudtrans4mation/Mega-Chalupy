<template>
    <HeaderFound :destination="selectedDestination" :travelDates="selectedDates" />
  
    <!-- Filter Section -->
    <section class="flex justify-center w-full py-8">
      <div
        class="flex flex-wrap justify-center items-start p-8 gap-8 w-full max-w-5xl bg-white rounded-lg shadow-lg border border-neutral-200">
        
        <!-- First Column: Room Accessibility -->
        <div class="flex flex-col justify-between gap-6 min-w-[240px] w-[280px] p-5 bg-neutral-50 rounded-lg shadow-sm">
          <RoomAccessibility @update-filter="updateFilter" />
        </div>
  
        <!-- Second Column: Property Rating -->
        <div class="flex flex-col justify-between gap-6 min-w-[240px] w-[280px] p-5 bg-neutral-50 rounded-lg shadow-sm">
          <PropertyRating @update-filter="updateFilter" />
        </div>
  
        <!-- Third Column: Placeholder for Additional Filters -->
        <div class="flex flex-col min-w-[240px] w-[280px] p-5 bg-neutral-50 rounded-lg shadow-sm">
          <!-- Additional Filters -->
        </div>
      </div>
    </section>
  
    <!-- Search Results -->
    <section class="flex flex-wrap justify-center gap-6 py-8">
      <SearchListingCard 
        v-for="cabin in filteredCabins" 
        :key="cabin.id" 
        :cabin="cabin" 
      />
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import PropertyRating from '~/components/advanced-search/PropertyRating.vue';
  import RoomAccessibility from '~/components/advanced-search/RoomAccessibility.vue';
  import SearchListingCard from '~/components/SearchListingCard.vue';
  import HeaderFound from '~/components/advanced-search/HeaderFound.vue';
  import { cabins } from '~/data/constants'; // Ensure this is correctly exported!
  
  const route = useRoute();
  
  // Reactive properties for filters
  const selectedDestination = ref(route.query.destination || '');
  const selectedDates = ref(route.query.travelDates || '');
  const selectedRating = ref<number | null>(null);
  const accessibilityFilters = ref<string[]>([]);
  
  // Watch for route query updates
  watch(
    () => route.query,
    (newQuery) => {
      selectedDestination.value = (newQuery.destination as string) || '';
      selectedDates.value = (newQuery.travelDates as string) || '';
    },
    { immediate: true }
  );
  
  // Update filters from child components
  const updateFilter = (filterType: string, value: any) => {
    if (filterType === 'rating') {
      selectedRating.value = value;
    } else if (filterType === 'accessibility') {
      accessibilityFilters.value = value;
    }
  };
  
  // Computed property for filtering cabins
  const filteredCabins = computed(() => {
    return cabins.filter((cabin) => {
      // Filter by destination
      if (selectedDestination.value && cabin.location !== selectedDestination.value) {
        return false;
      }
  
      // Filter by rating
      if (selectedRating.value !== null && cabin.rating < selectedRating.value) {
        return false;
      }
  
      // Filter by accessibility
      if (accessibilityFilters.value.length > 0) {
        return accessibilityFilters.value.every((filter) => cabin.accessibility.includes(filter));
      }
  
      return true;
    });
  });
  </script>
  