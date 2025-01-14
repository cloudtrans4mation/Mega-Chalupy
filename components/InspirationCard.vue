<template>
    <article class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-w-full mx-auto p-4">
      <!-- Image Section -->
      <img
        :src="image"
        :alt="title"
        class="object-cover w-full h-48 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
         
      />
      <!-- Content Section -->
      <div class="flex flex-col mt-4 space-y-2">
        <h3 class="text-lg font-semibold text-gray-800 truncate">
          {{ title }}
        </h3>
        <p class="text-sm text-gray-600 truncate">
          {{ description }}
        </p>
      </div>
    </article>
  </template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'InspirationCard',

    props: {

        image: {

            type: String,

            required: true,

        },

        title: {

            type: String, required: true,

        },

        description: {

            type: String,

            required: true,

        },

    },

});

</script>