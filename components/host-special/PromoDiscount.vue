<template>

    <section class="flex flex-col px-72 pt-9 max-md:px-5">
  
      <div class="flex flex-col flex-1 w-full max-md:max-w-full">
  
        <header class="flex flex-col w-full max-md:max-w-full">
  
          <h1 class="text-4xl text-black max-md:max-w-full">
  
            Please select <span class="font-bold text-black">Promo Discounts ...</span>
  
          </h1>
  
          <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">
  
            Please let us know if its professional service for you...
  
          </p>
  
        </header>
  
        <main class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
  
          <div class="flex flex-col w-full max-md:max-w-full">
  
            <DiscountOption
  
              :title="'Discount via Promo Code'"
  
              :imageSrc="'https://cdn.builder.io/api/v1/image/assets/TEMP/d7a5005ddac153168559101073b9c44d41041cc5df548bdbcd17f751e3f1777e?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa'"
  
              :isSelected="true"
  
            /> <DiscountOption

:title="'As an individual'"

:description="'If you dont have promo code, please continue'"

:imageSrc="'https://cdn.builder.io/api/v1/image/assets/TEMP/7d6992a45afed212280513d7eaaf4e98dbfcb9ce60291d82fe1b8711db5ab879?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa'"

:isSelected="false"

/>

<a href="#" class="mt-5 text-xs tracking-wide underline text-slate-800 max-md:max-w-full">

Get Help ?

</a>

</div>

</main>

</div>

</section>

</template><script lang="ts">

import { defineComponent } from 'vue';

import DiscountOption from './DiscountOption.vue';


export default defineComponent({

  name: 'PromoDiscounts',

  components: {

    DiscountOption,

  },

});

</script>