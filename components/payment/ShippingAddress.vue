<template>

    <section class="flex flex-col justify-center mt-7 w-full max-md:max-w-full">
  
      <h2 class="text-2xl font-bold text-black max-md:max-w-full">Shipping Address</h2>
  
      <form class="flex flex-wrap gap-5 justify-center items-center mt-5 w-full max-md:max-w-full">
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="addressLine1" class="text-base font-semibold leading-none text-black max-md:max-w-full">Address line 1</label>
  
          <input id="addressLine1" type="text" placeholder="Your Complete address..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="city" class="text-base font-semibold leading-none text-black max-md:max-w-full">City</label>
  
          <input id="city" type="text" placeholder="Your city..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="state" class="text-base font-semibold leading-none text-black max-md:max-w-full">State</label>
  
          <input id="state" type="text" placeholder="Your state..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="postalCode" class="text-base font-semibold leading-none text-black max-md:max-w-full">Postal code</label>
  
          <input id="postalCode" type="text" placeholder="ZIP Code (231216)" class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
      </form>
  
    </section>
  
  </template><template>

  <section class="flex flex-col justify-center mt-7 w-full max-md:max-w-full">

    <h2 class="text-2xl font-bold text-black max-md:max-w-full">Shipping Address</h2>

    <form class="flex flex-wrap gap-5 justify-center items-center mt-5 w-full max-md:max-w-full">

      <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">

        <label for="addressLine1" class="text-base font-semibold leading-none text-black max-md:max-w-full">Address line 1</label>

        <input id="addressLine1" type="text" placeholder="Your Complete address..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

      <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="city" class="text-base font-semibold leading-none text-black max-md:max-w-full">City</label>

        <input id="city" type="text" placeholder="Your city..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

      <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="state" class="text-base font-semibold leading-none text-black max-md:max-w-full">State</label>

        <input id="state" type="text" placeholder="Your state..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

      <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">

        <label for="postalCode" class="text-base font-semibold leading-none text-black max-md:max-w-full">Postal code</label>

        <input id="postalCode" type="text" placeholder="ZIP Code (231216)" class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

    </form>

  </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

  name: 'ShippingAddress',

});

</script>