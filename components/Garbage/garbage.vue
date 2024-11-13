<NavigationMenuRoot v-model="currentTrigger"
class="  relative z-[1] flex w-full justify-center black-text border-none ">

<NavigationMenuList>
  <NavigationMenuItem>

    <form style="background-color: transparent" @submit.prevent="handleSearch"
      class="relative flex flex-col md:flex-row gap-4 items-center p-4 mt-5 w-full bg-white/90 rounded-full shadow-lg backdrop-blur-lg">
      <!-- Form Inputs Container -->
      <div class="flex flex-wrap gap-4 w-full">
        <!-- DestinationSelect Component -->
        <div
          class="relative flex items-center p-3 bg-white rounded-full shadow-sm border border-gray-200 flex-1 min-w-[240px] lg:min-w-[250px]">
          <img loading="eager"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4ea68a008ae9dd183ee824e10715869e80b1eb05e7139f33595a2df3614bb8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="destination-icon" class="w-5 h-5 mr-2" />
          <label for="destination" class="sr-only">Going to</label>
          <input type="text" id="destination" placeholder="Destination"
            class="w-full bg-transparent border-none outline-none placeholder-gray-500"
            @focus="toggleAccordion" />

          <!-- Dropdown Component -->
          <div v-if="isAccordionOpen"
            class="absolute top-full left-0 mt-2 w-full z-20 bg-white rounded-lg shadow-lg p-4">
            <DestinationSelect @close="isAccordionOpen = false" />
          </div>
        </div>

        <!-- Dates Input -->
        <div
          class="relative flex items-center p-3 bg-white rounded-full shadow-sm border border-gray-200 flex-1 min-w-[240px] lg:min-w-[250px]"
          @click="toggleDateSelector">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/385186cd1e9b4d55a0a945e9beba365cb5e8c23ae2ff1582c154eef948783cbb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="dates-icon" class="w-5 h-5 mr-2" />
          <label for="dates" class="sr-only">Dates</label>
          <input type="text" id="dates" placeholder="Select dates"
            class="w-full bg-transparent border-none outline-none placeholder-gray-500" />
        </div>

        <!-- Travelers Input -->
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
      </div>

      <!-- Search Button -->
      <button type="submit"
        class="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none">
        Search
      </button>

      <!-- Date Selector Component -->
      <transition name="fade">
        <DateSelector v-if="isDateSelectorOpen"
          class="absolute top-full left-0 mt-2 w-full z-20 bg-white rounded-lg shadow-lg p-4" />
      </transition>
    </form>


  </NavigationMenuItem>
</NavigationMenuList>

</NavigationMenuRoot>