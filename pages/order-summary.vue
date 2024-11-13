<template>

    <main class="flex flex-col px-72 pt-9 max-md:px-5">

        <section class="flex flex-col justify-center w-full max-md:max-w-full">

            <header class="flex flex-col w-full max-md:max-w-full">

                <h1 class="text-4xl text-black max-md:max-w-full">

                    Order <span class="font-bold text-black">Summary</span>

                </h1>

                <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">

                    1 year subscription only for first time hosts ...

                </p>

            </header>

            <section class="flex flex-col mt-8 w-full max-md:max-w-full">

                <div
                    class="flex flex-wrap gap-2.5 items-center px-8 w-full bg-black rounded-xl max-md:px-5 max-md:max-w-full">

                    <div class="flex items-start self-stretch py-6 my-auto w-[102px]">

                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63854f49a95b61f77f7a94f7c993b826e10d1f01134a3e666aa068256f4debd2?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                            alt="" class="object-contain aspect-[3.18] w-[102px]" />

                    </div>

                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/630cd76872211c2b34e37109428f10bdd02d6bf1dea8ac77fda3bd4a7aeecbb2?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                        alt="" class="object-contain shrink-0 self-stretch my-auto aspect-[7.09] w-[170px]" />

                </div>

                <div class="flex flex-col pl-1.5 mt-2.5 w-full text-sm font-medium text-stone-800 max-md:max-w-full">

                    <div
                        class="flex flex-wrap gap-10 items-center pt-5 w-full border-t border-white border-opacity-40 max-md:max-w-full">
                        <p class="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">

                            <strong>Mega - chalupy subscription</strong>

                        </p>

                        <p class="self-stretch my-auto">1 year services subscription</p>

                    </div>

                    <div class="flex flex-col justify-center mt-6 w-full max-md:max-w-full">

                        <div
                            class="flex flex-wrap gap-10 items-center pt-5 w-full border-t border-white border-opacity-40 max-md:max-w-full">

                            <p class="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">

                                <strong>Total cost</strong>
                            </p>

                            <p class="self-stretch my-auto">

                                <strong>$50 / year</strong>

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <form class="flex flex-col justify-center mt-8 w-full min-h-[70px] max-md:max-w-full">

                <label for="promoCode" class="gap-2.5 self-start text-base font-semibold leading-none text-blue-600">

                    PROMO CODE

                </label> <input type="text" id="promoCode" placeholder="Zadejte Slevový Kupón zde..."
                    class="gap-2.5 self-stretch px-2.5 py-3 mt-2 w-full text-sm font-medium text-center bg-white rounded-lg border border-solid border-black border-opacity-10 min-h-[40px] text-neutral-500 max-md:max-w-full" />

            </form>

        </section>
        <header class="flex flex-col w-full max-md:max-w-full">

            <h1 class="text-4xl text-black max-md:max-w-full">
                Complete <span class="font-bold text-black">Your order</span>
            </h1>

            <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">
                Enter your banking information, must be same name as under registered user.
            </p>

        </header>


        <section class="flex flex-col justify-center mt-10 w-full max-md:max-w-full">

            <PersonalDetails />
            <PaymentDetails />
            <ShippingAddress />


        </section>


        <div class="flex pt-12 flex-col gap-8">

            <div class="flex flex-col gap-4 md:flex-row">
                <Button label="Back" outline />
                <Button style="background-color: blue;" label="Next" @click="redirectToCheckout" />
            </div>
        </div>



    </main>



</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default defineComponent({

    name: 'OrderSummary',
    methods: {
        redirectToCheckout() {
            // Example using a routing approach
            this.$router.push({ name: 'checkout' }); // Replace 'checkout' with your actual route name

        },
    }

});

</script>