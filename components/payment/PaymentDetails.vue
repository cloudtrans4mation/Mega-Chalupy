<template>

  <section class="flex flex-col justify-center mt-7 w-full max-md:max-w-full">

    <h2 class="text-2xl font-bold text-black max-md:max-w-full">Payment Details</h2>

    <div class="flex flex-wrap gap-5 items-start mt-5 w-full max-md:max-w-full">

      <div class="flex space-x-4">
        <button class="payment-button">
          <img  
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bec191a71480ce2d625c1319e3b8709969cc9e53971c0288223695085435c1a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="Payment option 1" class="object-contain shrink-0 aspect-[1.46] w-[70px]" />
        </button>
        <button class="payment-button">
          <img  
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de59801cb4fadaf2ae390c2ac7c86ce5de391d057405e5e4b40aa17cfd8f06a8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="Payment option 2" class="object-contain shrink-0 aspect-[1.46] w-[70px]" />
        </button>
      </div>

      <div class="self-stretch text-xs font-semibold leading-6 text-center text-black w-[19px]">OR</div>

      <div class="flex gap-5 items-center">
        <button class="payment-button">
          <img  
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5735caa7ed9bb96e2ad388f70c61c45615969dc62fa1cb6a244feb0e36f25512?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="Payment option 3" class="object-contain shrink-0 self-stretch my-auto aspect-[1.46] w-[70px]" />
        </button>
        <button class="payment-button">
          <img  
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65d0faed214ad5695dd2e320a6f9dd352e92bae75ea7276cb885d0aefb2694cc?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="Payment option 4" class="object-contain shrink-0 self-stretch my-auto aspect-[1.46] w-[70px]" />
        </button>
      </div>

    </div>

    <form class="flex flex-wrap gap-5 justify-center items-center mt-5 w-full max-md:max-w-full">

      <div
        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="cardHolderName" class="text-base font-semibold leading-none text-black max-md:max-w-full">Card
          holder name</label>

        <input id="cardHolderName" type="text" placeholder="Enter your first name..."
          class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

      <div
        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="cardNumber" class="text-base font-semibold leading-none text-black max-md:max-w-full">Card
          number</label>

        <input id="cardNumber" type="text" placeholder="Enter your Card number..."
          class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>
      <div
        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="cvv" class="text-base font-semibold leading-none text-black max-md:max-w-full">CVV</label>

        <input id="cvv" type="text" placeholder="Example: 4567"
          class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

      <div
        class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

        <label for="expirationDate" class="text-base font-semibold leading-none text-black max-md:max-w-full">Expiration
          Date</label>

        <input id="expirationDate" type="text" placeholder="MM/YY"
          class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

      </div>

    </form>

  </section>

</template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

  name: 'PaymentDetails',

});

</script>

<style scoped>
.payment-button {
  @apply relative overflow-hidden rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105;
}

.payment-button img {
  @apply w-full h-full object-cover;
}
</style>
