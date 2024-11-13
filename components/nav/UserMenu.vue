<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { routes } from '~/data/constants';

// Fetching user data from the existing useUser function
const user = useUser(); // Assuming useUser returns a ref of User object or null

// State for menu open/close
const isOpen = ref(false);

// Function to log out the user
function logout() {
  $fetch('/api/v1/auth/logout', { method: 'POST' })
    .then(() => reloadNuxtApp())
    .catch(error => console.error(error));
}

// Function to close menu when clicking outside
function handleClickOutside(event: Event) {
  const menu = document.querySelector('.menu-dropdown');
  if (menu && !menu.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

// Event listeners for clicking outside the menu
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Computed property to filter routes based on clientType
const filteredRoutes = computed(() => {
  // Type assertion to inform TypeScript that user.value has a clientType property
  const clientType = (user.value as any)?.clientType; // Using 'as any' to bypass type checking

  if (clientType === 'client') {
    // Filter out 'Subscription' and 'Host with Mega-Chalupy' routes for 'client' type users
    return routes.filter(route => 
      route.label !== 'Subscription' && 
      route.label !== 'Host with Mega-Chalupy'
    );
  }
  
  // Return all routes for 'owner' or other types
  return routes;
});
</script>

<template>
  <div style="z-index: 999;" class="block ml-auto">
    <div class="relative flex flex-row items-center justify-end gap-3">
      <div class="relative inline-block text-left shrink-0 menu-dropdown">
        <!-- Show user menu if logged in -->
        <div v-if="!!user">
          <button @click="isOpen = !isOpen" aria-label="mobile hamburger menu"
            class="flex flex-row items-center gap-3 p-3 md:py-2 md:px-3 transition border-2 rounded-full cursor-pointer border-neutral-200 hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
            <Icon name="heroicons-solid:menu" class="size-5 text-neutral-600" />
            <div class="hidden md:block">
              <Avatar :src="user?.image" class="w-8 h-8 rounded-full border border-neutral-200" />
            </div>
          </button>
        </div>

        <!-- Show sign up and login buttons if not logged in -->
        <div v-if="!user" class="flex gap-4 justify-center items-center">
          <MenuItem label="Sign Up" href="/register" />
          <div class="flex shrink-0 w-px bg-zinc-300 h-[22px]"></div>
          <MenuItem label="Login" href="/login" />
        </div>

        <!-- Dropdown menu for logged in user -->
        <transition enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in" leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">

          <div v-if="isOpen" @click="isOpen = false"
            class="absolute right-0 z-50 w-64 mt-2 origin-top-right bg-white rounded-xl shadow-lg ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none">
            <div class="px-4 py-3">
              <!-- User profile link -->
              <div v-if="!!user">
                <NuxtLink :to="`/users/${user.id}`"
                  class="flex items-center px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100">
                  <Avatar :src="user?.image" class="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div class="font-semibold">{{ user.name }}</div>
                    <div class="text-sm text-gray-500">View your profile</div>
                  </div>
                </NuxtLink>
              </div>
              <hr class="my-2">
              <!-- Filtered routes based on clientType -->
              <div>
                <MenuItem v-for="route in filteredRoutes" :key="route.label" :href="route.href" :icon="route.icon"
                  :label="route.label" />
              </div>
              <hr class="my-2">
              <!-- Logout button -->
              <MenuItem class="cursor-pointer" @click="logout" icon="material-symbols-light:logout-sharp"
                label="Logout" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
