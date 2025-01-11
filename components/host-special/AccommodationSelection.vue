<template>
    <section class="flex flex-col">
        <div class="flex flex-col w-full max-md:max-w-full">
            <button
                :class="['flex flex-wrap gap-2.5 justify-center items-center px-8 py-8 w-full text-base font-bold rounded-3xl border-2 border-solid min-h-[106px] max-md:px-5 max-md:max-w-full',
                    selectedAccommodation === 'entire' ? 'bg-neutral-100 text-black border-black' : 'bg-white text-black border-black border-opacity-10']"
                @click="selectAccommodation('entire')">
                <span class="flex-1 shrink self-stretch my-auto min-w-[240px] max-md:max-w-full">
                   Entire
                </span>
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc64419cc6d432c824d749fa04ea485f6a2652eb3911638e9e9794aa83a4134b?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Icon for entire accommodation"
                    class="object-contain shrink-0 self-stretch my-auto aspect-square w-[45px]" />
            </button>

            <button
                :class="['flex flex-wrap gap-2.5 justify-center items-center p-8 py-7 mt-5 w-full rounded-3xl border border-solid min-h-[106px] max-md:px-5 max-md:max-w-full',
                    selectedAccommodation === 'room' ? 'bg-neutral-100 text-black border-black' : 'bg-white text-black border-black border-opacity-10']"
                @click="selectAccommodation('room')">
                <div
                    class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <h2 class="text-base font-bold">Room</h2>
                    <p class="mt-2.5 text-sm leading-none text-slate-800 max-md:max-w-full">
                        <span class="text-neutral-500">Please choose ideal</span>...
                    </p>
                </div>
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6032e2da097521c01f6f13f224f534c3b64bb56460b7aa6ba5be946db5edc01?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Icon for room accommodation"
                    class="object-contain shrink-0 self-stretch my-auto w-11 aspect-[0.98]" />
            </button>

            <button
                :class="['flex flex-wrap gap-2.5 justify-center items-center p-8 py-7 mt-5 w-full rounded-3xl border border-solid min-h-[106px] max-md:px-5 max-md:max-w-full',
                    selectedAccommodation === 'shared' ? 'bg-neutral-100 text-black border-black' : 'bg-white text-black border-black border-opacity-10']"
                @click="selectAccommodation('shared')">
                <div
                    class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <h2 class="text-base font-bold">Shared</h2>
                    <p class="mt-2.5 text-sm leading-none text-slate-800 max-md:max-w-full">
                        <span class="text-neutral-500">Please choose ideal</span>...
                    </p>
                </div>
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a43db3f340ef72d37c9df0c3f61c5e1017277685055e3199d6631262051ab9f6?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Icon for shared accommodation"
                    class="object-contain shrink-0 self-stretch my-auto aspect-square w-[45px]" />
            </button>

            <a href="#help" class="mt-5 text-xs tracking-wide underline text-slate-800 max-md:max-w-full">
                Get Help ?
            </a>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define the emit function for the component's event
const emit = defineEmits(['AccommodationSelectionSelected']);

// Reactive variable to hold the selected accommodation type
const selectedAccommodation = ref<'entire' | 'room' | 'shared'>('entire');

// Method to update the selected accommodation type
function selectAccommodation(type: 'entire' | 'room' | 'shared') {
    selectedAccommodation.value = type;
    console.log(`Selected accommodation type: ${type}`);
    
    // Emit the updated selection
      emit('AccommodationSelectionSelected', selectedAccommodation.value);

    console.log(type)

}
</script>
