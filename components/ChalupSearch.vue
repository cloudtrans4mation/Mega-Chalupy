<template>
  <section class="flex flex-col pb-[50px] max-md:pb-24">
    <header class="relative flex flex-col px-4 w-full min-h-[451px] max-md:max-w-full justify-center items-center">
      <!-- Background Image with Gradient Overlay -->
      <div class="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
        <img loading="lazy" src="../public/mega-search-image.png" alt="background"
          class="object-cover w-full h-full rounded-lg" />
      </div>

      <!-- Centered Main Content -->
      <div style="z-index: 1;" class="relative z-10 flex flex-col items-center justify-center w-full max-w-[1024px] text-center text-white px-4">
        <h1 class="text-3xl md:text-4xl font-extrabold leading-snug mb-4 drop-shadow-lg">
          Welcome, look for a cottage
        </h1>
        <!-- Search Form -->
        <form @submit.prevent="handleSearch"
          class="flex flex-wrap gap-2.5 items-center p-3.5 mt-4 w-full max-w-[800px] bg-gray-200 border border-solid border-gray-300 rounded-[37px] max-md:flex-col">
          <div
            class="flex flex-wrap flex-1 shrink gap-1 items-center self-stretch text-xs text-slate-800 max-md:flex-col max-md:gap-3">
            <!-- Destination Input -->
            <div
              class="flex items-center flex-1 gap-3.5 py-3 pr-11 pl-3 bg-white border border-gray-300 rounded-[34px] max-md:pr-5 relative z-[1]">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/22d987ef3af71f26e034623e9c561f36ad62f9aed60361d37089f9b4764a1878?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
                class="w-4 h-4 object-contain" alt="" />
              <label for="destination" class="sr-only">Destination</label>
              <MenubarRoot v-model="currentMenu" class="flex-1">
                <MenubarMenu value="file" class="w-full">
                  <MenubarTrigger
                    class="w-full flex items-center justify-between gap-[2px] font-semibold rounded text-grass11 text-[13px] hover:bg-green4 transition-colors">
                    <input type="text" id="destination" :value="selectedDestination" placeholder="Going to"
                      class="flex-1 text-sm bg-transparent border-none outline-none placeholder-gray-400" />
                  </MenubarTrigger>
                  <MenubarPortal>
                    <MenubarContent style="z-index: 9999;" class="min-w-[220px] bg-white rounded-md p-[5px] shadow-lg">
                      <MenubarItem class="flex items-center rounded hover:bg-green4">
                        <DestinationSelect @destination-selected="updateSelectedDestination" />
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarPortal>
                </MenubarMenu>
              </MenubarRoot>
            </div>

            <!-- Dates Input -->
            <div
              class="flex items-center flex-1 gap-3.5 py-3 pr-11 pl-3 bg-white border border-gray-300 rounded-[34px] max-md:pr-5">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/46cdace2eb081e9ad1f85a4eb522baf565aa92fba0df8dee5c0aab61a5e10ac0?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
                class="w-4 h-4 object-contain" alt="" />
              <label for="travel-dates" class="sr-only">Travel Dates</label>
              <input type="date" id="travel-dates"
                class="flex-1 text-sm bg-transparent border-none outline-none placeholder-gray-400"
                aria-label="Select travel dates" />
            </div>

            <!-- Travelers Input -->
            <div
              class="flex items-center flex-1 gap-3.5 py-3 pr-11 pl-3 bg-white border border-gray-300 rounded-[34px] max-md:pr-5">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/873c6c0dd8939241b16802abb1e017d5d6f1f45d2a15f76b845a27e0c4c44b90?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
                class="w-4 h-4 object-contain" alt="" />
              <label for="travelers" class="sr-only">Number of travelers</label>
              <select id="travelers" class="flex-1 text-sm bg-transparent border-none outline-none placeholder-gray-400"
                aria-label="Select number of travelers">
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4 travelers</option>
              </select>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit"
            class="self-stretch py-2.5 px-4 text-sm font-bold text-white bg-blue-600 rounded-[39px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 max-md:w-full">
            Search
          </button>
        </form>

      </div>
    </header>
  </section>
</template>

<style scoped>
input {
  color: black;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>





<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import type { DateValue } from '@internationalized/date'
import { useRouter } from 'vue-router';
import DateSelector from './date-home-search/DateSelector.vue';
import DestinationSelect from './DestinationSelect.vue';
import MainSearchBar from './MainSearchBar.vue';
export default defineComponent({
  name: 'ChalupSearch',
  components: {
    DateSelector,
    DestinationSelect,
    MainSearchBar,
  },
  setup() {
    const router = useRouter();
    // State for query parameters
    const queryParams = ref({
      locationValue: '',
      category: '',
      favoriteIds: [],
    });
    // State for dropdowns
    const isAccordionOpen = ref(false);
    const isDateSelectorOpen = ref(false);
    const selectedDates = ref('');
    const selectedDestination = ref('');

    // Update selected destination
    const updateSelectedDestination = (destination: string) => {
      selectedDestination.value = destination;
      queryParams.value.locationValue = destination; // Update queryParams
    };

    // Update selected dates
    const updateSelectedDates = (dates: string) => {
      selectedDates.value = dates;
    };

    // Handle search button click
    const handleSearch = () => {
      console.log('Selected Dates:', selectedDates.value); // Debugging output
      const searchParams = new URLSearchParams(queryParams.value as any).toString();
      router.push(`/advanced-search?${searchParams}`);
    };

    // Toggle the accordion and close DateSelector if needed
    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
      if (isAccordionOpen.value) {
        isDateSelectorOpen.value = false;
      }
    };

    // Toggle the DateSelector and close accordion if needed
    const toggleDateSelector = () => {
      isDateSelectorOpen.value = !isDateSelectorOpen.value;
      if (isDateSelectorOpen.value) {
        isAccordionOpen.value = false;
      }
    };

    // Close dropdowns when clicking outside
    const closeDropdowns = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        isAccordionOpen.value = false;
        isDateSelectorOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('click', closeDropdowns);
    });

    onUnmounted(() => {
      window.removeEventListener('click', closeDropdowns);
    });

    const isDateUnavailable = (date: DateValue) => {
      return date.day === 17 || date.day === 18;
    };

    return {
      queryParams,
      isAccordionOpen,
      toggleAccordion,
      isDateSelectorOpen,
      toggleDateSelector,
      selectedDates,
      updateSelectedDates,
      selectedDestination,
      updateSelectedDestination,
      handleSearch,
      isDateUnavailable,
    };
  },
});
</script>
