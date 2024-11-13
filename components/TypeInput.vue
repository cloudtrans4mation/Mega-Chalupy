<template>

    <main class="flex flex-col px-72 pt-9 max-md:px-5">

        <section class="flex flex-col w-full max-md:max-w-full">

            <header class="flex flex-col w-full max-md:max-w-full">

                <h1 class="text-4xl text-black max-md:max-w-full">

                    Tell the guest <span class="font-bold text-black">How you be host ?</span>

                </h1>

                <p class="mt-4 text-xs tracking-wide text-neutral-500 max-md:max-w-full">

                    Please let us know if its professional service for you...

                </p>

            </header>

            <div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">

                <div class="flex flex-col w-full max-md:max-w-full">

                    <button
                        class="flex flex-wrap gap-2.5 justify-center items-center px-8 py-10 w-full rounded-3xl border-2 border-black border-solid bg-neutral-100 min-h-[106px] max-md:px-5 max-md:max-w-full"
                        @click="selectOption('individual')">

                        <span
                            class="flex-1 shrink self-stretch my-auto text-base font-bold text-black min-w-[240px] max-md:max-w-full">

                            As an individual

                        </span>

                        <div
                            class="flex flex-col justify-center items-center px-1 bg-black h-[27px] rounded-[75px] w-[27px]">

                            <div class="flex shrink-0 bg-white h-[15px] rounded-[75px] w-[15px]"></div>

                        </div>

                    </button>

                    <button
                        class="flex flex-wrap gap-2.5 justify-center items-center p-8 py-7 mt-5 w-full bg-white rounded-3xl border border-solid border-black border-opacity-10 min-h-[106px] max-md:px-5 max-md:max-w-full"
                        @click="selectOption('business')">

                        <div
                            class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">

                            <span class="text-base font-bold text-black">As a Business</span>

                            <span class="mt-2.5 text-sm leading-none text-slate-800 max-md:max-w-full">

                                <span class="text-neutral-500">Please choose ideal</span>...</span>

                        </div>

                        <div
                            class="flex gap-2.5 justify-center items-center px-0.5 bg-black h-[27px] min-h-[27px] rounded-[75px] w-[27px]">

                            <div
                                class="flex self-stretch my-auto bg-white h-[23px] min-h-[23px] rounded-[75px] w-[23px]">
                            </div>

                        </div>

                    </button>

                    <a href="#" class="mt-5 text-xs tracking-wide underline text-slate-800 max-md:max-w-full">

                        Get Help ?

                    </a>

                </div>
            </div>

        </section>

        <footer
            class="flex flex-col self-center px-2.5 pt-12 pb-2.5 mt-14 max-w-full text-xs whitespace-nowrap w-[765px] max-md:mt-10">

            <div class="flex flex-wrap gap-5 justify-center items-center w-full max-md:max-w-full">

                <button
                    class="flex flex-1 shrink justify-center items-center self-stretch my-auto font-medium text-black rounded-lg basis-8 min-w-[240px]"
                    @click="goBack"><span
                        class="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto w-full rounded-lg border border-black border-solid min-w-[240px]">

                        Back

                    </span>

                </button>

                <button
                    class="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto font-semibold text-white bg-blue-600 rounded-lg min-w-[240px]"
                    @click="goNext">

                    Next

                </button>

            </div>

        </footer>

    </main>

</template><span
    class="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto w-full rounded-lg border border-black border-solid min-w-[240px]">

Back

</span>

</button>

<button
    class="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto font-semibold text-white bg-blue-600 rounded-lg min-w-[240px]"
    @click="goNext">

Next

</button>

</div>

</footer>

</main>

</template>
<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'HostingOptions',

    methods: {

        selectOption(option: 'individual' | 'business') {

            // Implement option selection logic

            console.log(`Selected option: ${option}`);

        },

        goBack() {

            // Implement back navigation logic

            console.log('Going back');

        },

        goNext() {

            // Implement next step logic

            console.log('Going to next step');

        },

    },

});

</script>