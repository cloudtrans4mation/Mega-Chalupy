<template>

    <section class="flex flex-col justify-center w-full max-md:max-w-full">
  
      <h2 class="text-2xl font-bold text-black max-md:max-w-full">Personal Details</h2>
  
      <form class="flex flex-wrap gap-5 justify-center items-center mt-5 w-full max-md:max-w-full">
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="firstName" class="text-base font-semibold leading-none text-black max-md:max-w-full">First name</label>
  
          <input id="firstName" type="text" placeholder="Enter your first name..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="lastName" class="text-base font-semibold leading-none text-black max-md:max-w-full">Last name</label>
  
          <input id="lastName" type="text" placeholder="Enter your last name..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="email" class="text-base font-semibold leading-none text-black max-md:max-w-full">Email</label>
  
          <input id="email" type="email" placeholder="Enter your Email..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  
          <label for="phone" class="text-base font-semibold leading-none text-black max-md:max-w-full">Phone number</label>
  
          <input id="phone" type="tel" placeholder="Enter your Phone number..." class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />
  
        </div>
  
      </form>
  
    </section>
  
  </template>
  <script lang="ts">

  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  
    name: 'PersonalDetails',
  
  });
  
  </script>