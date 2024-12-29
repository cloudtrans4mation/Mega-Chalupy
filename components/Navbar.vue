<template>
  <section class="z-10 w-full shadow-sm">
    <Container>
      <nav class="flex flex-col w-full">
        <!-- Top Navigation -->
        <div class="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-md border-opacity-40">

          <!-- Logo -->
          <div class="flex items-center py-2 w-8 md:w-10 lg:w-12">
            <a href="/">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d94eb955a9911f127502f228d4b5bd9c7d8dfc5042ed9c3733608221b0d7c07?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
                alt="Company Logo" class="object-contain w-full aspect-square" />
            </a>
          </div>

          <!-- Navigation Links (Desktop Only) -->
          <div v-if="!isMobile"
            class="hidden md:flex justify-center items-center space-x-8 md:space-x-10 h-full">
            <a href="#"
              class="nav-link px-6 py-3 text-center text-gray-800 font-semibold hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full transition-all duration-300 ease-in-out">
              Housing
            </a>
            <a href="/experiences"
              class="nav-link px-6 py-3 text-center text-gray-800 font-semibold hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full transition-all duration-300 ease-in-out">
              Experiences
            </a>
          </div>




          <!-- Search Component -->
          <div v-if="!user" class="hidden md:block">
            <NavSearch />
          </div>

          <!-- User Options -->
          <div class="flex gap-2 items-center py-2 text-sm text-blue-600">
            <!-- Dropdown Menu -->
            <div class="relative">
              <FlagsTranslation />
            </div>
            <!-- User Menu Component -->
            <NavUserMenu />
          </div>

          <!-- Mobile Menu Toggle -->
          <div v-if="!user && isMobile" class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <transition enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-150 ease-in">
          <div v-if="mobileMenuOpen" class="md:hidden flex flex-col space-y-6 px-8 py-6 bg-white shadow-md rounded-lg">
            <a href="#"
              class="nav-link px-6 py-3 text-center text-gray-800 font-semibold hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full transition-all duration-300 ease-in-out">
              Housing
            </a>
            <a href="/experiences"
              class="nav-link px-6 py-3 text-center text-gray-800 font-semibold hover:text-gray-900 hover:border-2 hover:border-gray-300 hover:rounded-full transition-all duration-300 ease-in-out">
              Experiences
            </a>
            <NavSearch />
          </div>
        </transition>


      </nav>

      <!-- Categories Section -->
      <Categories />
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Container from '~/components/Container.vue';
import NavSearch from './nav/Search.vue';
import FlagsTranslation from '~/components/FlagsTranslation.vue';
import NavUserMenu from '~/components/nav/UserMenu.vue';
import Categories from '~/components/Categories.vue';

// User state
const user = useUser();

// State to detect screen size
const isMobile = ref(false);

// Function to check if the view is mobile
function checkMobileView() {
  isMobile.value = window.innerWidth < 768; // Adjust breakpoint as needed
}

// Mobile menu toggle state
const mobileMenuOpen = ref(false);

// Toggle function for mobile menu
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

// Set up event listeners to update on resize
onMounted(() => {
  checkMobileView();
  window.addEventListener('resize', checkMobileView);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobileView);
});
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