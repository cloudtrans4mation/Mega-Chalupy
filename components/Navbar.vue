<template>
  <section class="z-10 w-full shadow-sm">
    <Container>
      <nav class="flex flex-col w-full">
        <div
          class="flex flex-wrap justify-between items-center px-6 py-4 w-full bg-white border-opacity-40 shadow-[0px_1px_1px_rgba(0,0,0,0.13)]">

          <!-- Logo -->
          <div class="flex items-center py-2 w-8 md:w-10 lg:w-12">
            <a href="/">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d94eb955a9911f127502f228d4b5bd9c7d8dfc5042ed9c3733608221b0d7c07?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
                alt="Company Logo" class="object-contain w-full aspect-square" />
            </a>
          </div>

          <!-- Navigation Links -->
          <nav class="nav-container flex space-x-4">
            <a href="#"
              class="nav-link hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full">Home</a>
            <a href="#"
              class="nav-link hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full">Offer
              overview
            </a>
            <a href="#"
              class="nav-link hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full">About us</a>
          </nav>

          <!-- User Options -->
          <div class="flex gap-2 items-center py-2 text-sm text-blue-600 rounded-full">
            <!-- Dropdown Menu -->
            <div class="relative">
              <FlagsTranslation></FlagsTranslation>
            </div>

            <!-- User Menu Component -->
            <NavUserMenu />
          </div>
        </div>

        <!-- Search Component -->
        <!---<div class="flex justify-center py-4">
          <Search/>
        </div>--->
      </nav>
    </Container>

    <!-- Categories Section -->
    <Categories />
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import UserMenu from './nav/UserMenu.vue';
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}


export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      showNavSearch: false, // Track whether NavSearch is displayed
    };
  },

});


const dropdownOpen = ref(true);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

const flags = [
  { src: '~/public/cz.svg', alt: 'Czech Flag', label: 'Czech Republic' },
  { src: '~/public/cz.svg', alt: 'Czech Flag', label: 'Czech Republic' },
  { src: '~/public/cz.svg', alt: 'Czech Flag', label: 'Czech Republic' },

];

</script>

<style scoped>
/* Base styles for desktop */
.nav-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* Adjust gap as needed */
  align-items: center;
  padding: 0 1rem;
  /* Adjust padding as needed */
  font-size: 0.875rem;
  /* Adjust font size as needed */
  font-weight: 600;
  color: black;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  /* Adjust padding as needed */
  text-decoration: none;
}

/* Mobile styles */
@media (max-width: 767px) {
  .nav-container {
    flex-direction: column;
    gap: 0.5rem;
    /* Adjust gap as needed */
    padding: 0 0.5rem;
    /* Adjust padding as needed */
  }

  .nav-link {
    text-align: center;
    padding: 0.5rem 0;
    /* Adjust padding as needed */
  }
}

.menu {
  position: relative;
  display: inline-block;
}

.dropdown {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;
  /* Hidden by default */
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.menu:hover .dropdown {
  display: block;
  /* Show dropdown on hover */
}

.dropdown li {
  padding: 8px 16px;
}

.dropdown li a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}

.dropdown li a:hover {
  background-color: #f1f1f1;
}
</style>