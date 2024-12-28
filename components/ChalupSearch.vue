<template>
  <section class="flex flex-col pb-28 max-md:pb-24">
    <header class="relative flex flex-col px-4 w-full min-h-[451px] max-md:max-w-full justify-center items-center">
      <!-- Background Image with Gradient Overlay -->
      <div class="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
        <img loading="lazy" src="../public/mega-search-image.png" alt="background"
          class="object-cover w-full h-full rounded-lg" />
      </div>

      <!-- Centered Main Content -->
      <div style="z-index: 1;"
        class="relative z-10 flex flex-col items-center justify-center w-full max-w-[1479px] text-center text-white px-4">
        <h1 class="text-3xl md:text-4xl font-extrabold leading-snug mb-4 drop-shadow-lg">
          Welcome, look for a cottage </h1>

        <!-- Search Form -->
        <!-- 2Form -->

        <MenubarRoot v-model="currentMenu"
          class="relative z-[1] flex w-full justify-center black-text border-none flex-wrap md:flex-nowrap">
          <!-- File Menu -->
          <MenubarMenu value="file" class="w-full md:w-auto">
            <MenubarTrigger
              class="w-full md:w-auto flex py-2 px-3 font-semibold rounded text-grass11 text-[13px] items-center justify-between gap-[2px] hover:bg-green4 transition-colors">
              <div
                class="flex items-center p-3 bg-white rounded-full shadow-sm border border-gray-200 flex-1 min-w-[240px] lg:min-w-[250px]">
                <img loading="eager"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4ea68a008ae9dd183ee824e10715869e80b1eb05e7139f33595a2df3614bb8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                  alt="destination-icon" class="w-5 h-5 mr-2" />
                <label for="destination" class="sr-only">Going to</label>
                <input type="text" id="destination" :value="selectedDestination" placeholder="Destination"
                  class="w-full bg-transparent border-none outline-none placeholder-gray-500" />
              </div>
            </MenubarTrigger>
            <MenubarPortal >
              <MenubarContent style="z-index: 9999;" class="min-w-[220px] bg-white rounded-md p-[5px] shadow-lg">
                <MenubarItem class="flex items-center rounded hover:bg-green4">
                  <DestinationSelect  @destination-selected="updateSelectedDestination" />
                </MenubarItem>
                <!-- Additional items here... -->
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <!-- Edit Menu -->

          <MenubarMenu value="Edit" class="w-full md:w-auto">
            <MenubarTrigger
              class="w-full md:w-auto flex py-2 px-3 font-semibold rounded text-grass11 text-[13px] items-center justify-between gap-[2px] hover:bg-green4 transition-colors">
              <div
                class="flex items-center p-3 bg-white rounded-full shadow-sm border border-gray-200 flex-1 min-w-[240px] lg:min-w-[250px]">
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/385186cd1e9b4d55a0a945e9beba365cb5e8c23ae2ff1582c154eef948783cbb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                  alt="dates-icon" class="w-5 h-5 mr-2" />
                <label for="dates" class="sr-only">Dates</label>
                <input type="text" id="dates" :value="selectedDates" placeholder="Select dates"
                  class="w-full bg-transparent border-none outline-none placeholder-gray-500"  />
              </div>
            </MenubarTrigger>
            <MenubarPortal>
              <MenubarContent class="min-w-[220px] bg-white rounded-md p-[5px] shadow-lg">
                <!-- Date Picker Component -->
                <DateSelector @dates-selected="updateSelectedDates" />
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>
          <!-- View Menu -->
          <MenubarMenu value="View" class="w-full md:w-auto">
            <MenubarTrigger
              class="w-full md:w-auto flex py-2 px-3 font-semibold rounded text-grass11 text-[13px] items-center justify-between gap-[2px] hover:bg-green4 transition-colors">
              <div
                class="flex items-center p-3 bg-white rounded-full shadow-sm border border-gray-200 flex-1 min-w-[240px] lg:min-w-[250px]">
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef580c73e38012b4a90786e17c2f82fadbdb107d48a77ca14baeebf60950b7b0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                  alt="travelers-icon" class="w-5 h-5 mr-2" />
                <label for="travelers" class="sr-only">Number of travelers</label>
                <input type="number" id="travelers" min="1" value="2"
                  class="w-full bg-transparent border-none outline-none placeholder-gray-500" />
                <span class="ml-2 text-gray-600">travelers</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>

          <!-- Search Button -->
          <Button type="submit"
            class="w-full md:w-auto mt-4 md:mt-0 md:ml-4 flex items-center justify-center px-8 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none">
            Search
          </Button>

        </MenubarRoot>



      </div>
    </header>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import DateSelector from './date-home-search/DateSelector.vue';
import DestinationSelect from './DestinationSelect.vue';
import MainSearchBar from './NewSearchBar/MainSearchBar.vue';
import Button from './Button.vue';

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,

  MenubarRoot,

  MenubarTrigger,
} from 'radix-vue'
import { RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNext, RangeCalendarPrev, RangeCalendarRoot } from 'radix-vue'
import type { DateValue } from '@internationalized/date'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'ChalupSearch',
  components: {
    DateSelector,
    DestinationSelect,
    MainSearchBar
  },
  setup() {
    const isAccordionOpen = ref(false);
    const isDateSelectorOpen = ref(false);
    const selectedDates = ref('');
    const selectedDestination = ref('');


    const updateSelectedDestination = (destination: string) => {
      selectedDestination.value = destination;
    };

    // Toggle the accordion and close the DateSelector when opening the accordion
    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
      if (isAccordionOpen.value) {
        isDateSelectorOpen.value = false; // Close DateSelector if DestinationSelect is opened
      }
    };

   const updateSelectedDates = (selectedDate) =>{
      this.selectedDates = selectedDate; // Update input field with selected date
    };

    // Toggle the DateSelector and close the accordion when opening DateSelector
    const toggleDateSelector = () => {
      isDateSelectorOpen.value = !isDateSelectorOpen.value;
      if (isDateSelectorOpen.value) {
        isAccordionOpen.value = false; // Close DestinationSelect if DateSelector is opened
      }
    };

    // Close dropdowns when clicking outside
    const closeDropdowns = (event: Event) => {
      const target = event.target as HTMLElement;
      // Close both dropdowns if clicked outside
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

    function isDateUnavailable(date: DateValue) {
      return date.day === 17 || date.day === 18
    }

    return {
      isAccordionOpen,
      toggleAccordion,
      isDateSelectorOpen,
      toggleDateSelector,
      selectedDates,
      updateSelectedDates,
      selectedDestination,
      updateSelectedDestination
    };
  },
});
</script>

/* Scoped CSS */
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
