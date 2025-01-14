<template>

    <div class="flex flex-col self-stretch bg-white">
  
      <header class="flex flex-col w-full max-md:max-w-full">
  
        <img   src="https://cdn.builder.io/api/v1/image/assets/TEMP/41c032371c5240256c0168af46e671e035d8e50b8dff65ab5a3b7994aff421a0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" alt="Trust and Safety banner" class="object-contain self-center mt-5 max-w-full aspect-[1.91] w-[880px]" />
  
      </header>
  
      <main class="flex flex-col px-72 pt-9 mt-5 w-full max-md:px-5 max-md:max-w-full">
  
        <section class="flex flex-col w-full max-md:max-w-full">
  
          <div class="flex flex-col w-full text-zinc-800 max-md:max-w-full">
  
            <div class="flex flex-col pt-12 w-full max-md:max-w-full">
  
              <div class="flex flex-col w-full max-md:max-w-full">
  
                <h1 class="text-6xl leading-none max-md:max-w-full max-md:text-4xl">
  
                  Trust & Safety policies
  
                </h1>
  
                <p class="mt-8 text-xs leading-7 max-md:max-w-full">
  
                  MegaCabin is a global community built on trust and inclusion. We're dedicated to providing a safe and secure marketplace and we're here to support you 24/7 whenever you have questions or need a hand.
  
                </p>
  
              </div>
  
              <nav class="flex flex-wrap gap-10 justify-center items-center p-4 mt-7 w-full text-sm font-medium leading-6 whitespace-nowrap border-t border-b border-solid border-y-zinc-800 border-y-opacity-40 max-md:max-w-full">
  
                <a href="#" class="gap-2.5 self-stretch py-2.5 pr-7 pl-7 my-auto bg-neutral-200 min-h-[44px] rounded-[50px] w-[101px] max-md:px-5">
  
                  Home
  
                </a>
  
                <a href="#" class="self-stretch my-auto">Guest</a><a href="#" class="self-stretch my-auto">Owner/Manager</a>

</nav>

</div>

</div>

<TrustSection />

<InclusionSection />

<SecuritySection />

<SupportSection />

<SafetySection />

<CommissionSection />

</section></main>

</div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';

import TrustSection from './trust-section.vue';

import InclusionSection from './inclusion-section.vue';

import SecuritySection from './security-section.vue';

import SupportSection from './support-section.vue';

import SafetySection from './safety-section.vue';

import CommissionSection from './commission-section.vue';


export default defineComponent({

name: 'TrustAndSafety',

components: {

  TrustSection,

  InclusionSection,

  SecuritySection,

  SupportSection,SafetySection,

CommissionSection,

},

});

</script>

