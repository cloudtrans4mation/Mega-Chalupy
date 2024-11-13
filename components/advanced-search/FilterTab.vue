<template>
    <section class="flex justify-center w-full py-8 bg-gray-50">
      <div class="flex flex-wrap justify-center items-start p-8 gap-8 w-full max-w-5xl bg-white rounded-lg shadow-lg border border-neutral-200">
        
        <!-- First Column -->
        <div class="flex flex-col justify-between gap-6 min-w-[240px] w-[280px] p-5 bg-neutral-50 rounded-lg shadow-sm">
          <RoomAccessibility />
        </div>
  
        <!-- Second Column -->
        <div class="flex flex-col min-w-[240px] w-[280px] p-5 text-zinc-900 bg-neutral-50 rounded-lg shadow-sm">
          <!-- Content for the second column -->
          <PropertyRating />

        </div>
  
        <!-- Third Column -->
        <div class="flex flex-col min-w-[240px] w-[280px] p-5 bg-neutral-50 rounded-lg shadow-sm">
          
          <!-- Content Header -->
          <div class="flex flex-col justify-center mb-4 text-zinc-900">
            <!-- Placeholder for additional content -->
          </div>
  
          <!-- Checkbox Section -->
       
        </div>
  
      </div>
    </section>
  </template>
  
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import PropertyRating from './PropertyRating.vue';
  import RoomAccessibility from './RoomAccessibility.vue';
  
  export default defineComponent({
    name: 'FilterTab',
    components: {
      PropertyRating,
      RoomAccessibility
    }
  });
  </script>