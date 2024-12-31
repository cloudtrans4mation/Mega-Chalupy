<template>

    <!-- <aside class="flex flex-col px-12 pt-8 pb-6 my-auto bg-white rounded-xl border border-solid shadow-lg border-black border-opacity-10 min-w-[240px] w-[316px] max-md:px-5">
  
      <h2 class="text-2xl leading-none text-neutral-800">
  
        <span class="text-xl leading-5 text-neutral-500">Proceed to</span>
  
        <span class="text-xl font-bold leading-5 text-slate-800">Order...</span>
  
      </h2>
  
      <button @click="proceedToOrder" class="flex relative gap-8 justify-center items-start px-6 py-3.5 mt-10 w-full text-base leading-none text-white whitespace-nowrap bg-black rounded-lg max-md:px-5">
  
        <span class="z-0 my-auto">dále</span>
  
      </button>
  
    </aside> -->
  
  </template>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  
    name: 'ProceedToPaymentFromListing',
  
    methods: {
  
      proceedToOrder() {
  
        // Implement order processing logic here
  
        console.log('Proceeding to order');
  
      },
  
    },
  
  });
</script>