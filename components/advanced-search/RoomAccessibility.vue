<template>
    <section class="flex justify-center">
        <div
            class="filter-tab flex flex-wrap justify-between items-start p-5 mt-11 w-full max-w-3xl bg-white rounded-lg  bg-blend-normal border-neutral-200 max-md:mt-10 max-md:max-w-full">

            <!-- Property Accessibility -->
            <div class="filter-column flex flex-col justify-between min-w-[240px] w-[261px]">
                <div
                    class="filter-section flex flex-col justify-center p-3 max-w-full bg-blend-normal text-zinc-900 w-[261px]">
                    <h2 class="text-sm font-bold leading-none mb-2.5">Property accessibility</h2>
                    <ul class="flex flex-col w-full text-sm leading-loose">
                        <li v-for="(item, index) in accessibilityItems" :key="index"
                            class="flex gap-2 items-center w-full bg-blend-normal mt-2.5 first:mt-0">
                            <input type="checkbox" :id="`accessibility-${index}`" v-model="item.checked"
                                class="w-5 h-5 bg-white rounded border border-zinc-500 cursor-pointer">
                            <label :for="`accessibility-${index}`" class="ml-2 cursor-pointer">{{ item.label }}</label>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Facilities -->
            <div class="filter-column flex flex-col min-w-[240px] text-zinc-900 w-[261px]">
                <div class="filter-section flex flex-col justify-center p-3 bg-blend-normal w-[261px]">
                    <h2 class="text-sm font-bold leading-none mb-2.5">Facilities</h2>
                    <ul class="flex flex-col w-full text-sm leading-loose">
                        <li v-for="(item, index) in facilityItems" :key="index"
                            class="flex gap-2 items-center w-full whitespace-nowrap bg-blend-normal mt-2.5 first:mt-0">
                            <input type="checkbox" :id="`facility-${index}`" v-model="item.checked"
                                class="w-5 h-5 bg-white rounded border border-zinc-500 cursor-pointer">
                            <label :for="`facility-${index}`" class="ml-2 cursor-pointer">{{ item.label }}</label>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Room Facilities -->
            <div class="filter-column flex flex-col min-w-[240px] w-[261px]">
                <div class="filter-section flex flex-col justify-center p-3 bg-blend-normal text-zinc-900 w-[261px]">
                    <h2 class="text-sm font-bold leading-none mb-2.5">Room Facilities</h2>
                    <ul class="flex flex-col w-full text-sm leading-loose">
                        <li v-for="(item, index) in roomFacilityItems" :key="index"
                            class="flex gap-2 items-center w-full bg-blend-normal mt-2.5 first:mt-0">
                            <input type="checkbox" :id="`room-facility-${index}`" v-model="item.checked"
                                class="w-5 h-5 bg-white rounded border border-zinc-500 cursor-pointer">
                            <label :for="`room-facility-${index}`" class="ml-2 cursor-pointer">{{ item.label }}</label>
                        </li>
                    </ul>
                    <div class="flex gap-2 items-center mt-4 text-sm leading-loose">
                        <input type="checkbox" id="proud-certified" v-model="proudCertified"
                            class="w-5 h-5 bg-white rounded border border-zinc-500 cursor-pointer">
                        <label for="proud-certified" class="ml-2 cursor-pointer">Proud Certified properties</label>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface FilterItem {
    label: string;
    checked: boolean;
}

export default defineComponent({
    name: 'FilterTab',
    setup() {
        const accessibilityItems = ref<FilterItem[]>([
            { label: 'Toilet with grab rails', checked: false },
            { label: 'Higher level toilet', checked: false },
            { label: 'Lower bathroom sink', checked: false },
            { label: 'Emergency cord in bathroom', checked: false },
            { label: 'Visual aids: Braille', checked: false },
            { label: 'Visual aids: Tactile signs', checked: false },
            { label: 'Auditory guidance', checked: false },
        ]);

        const facilityItems = ref<FilterItem[]>([
            { label: 'Parking', checked: false },
            { label: 'Free WiFi', checked: false },
            { label: 'Restaurant', checked: false },
            { label: 'Pets allowed', checked: false },
            { label: 'Room service', checked: false },
        ]);

        const roomFacilityItems = ref<FilterItem[]>([
            { label: 'Coffee machine', checked: false },
            { label: 'Coffee/tea maker', checked: false },
            { label: 'Electric kettle', checked: false },
            { label: 'Sea view', checked: false },
            { label: 'View', checked: false },
        ]);

        const proudCertified = ref(false);

        return {
            accessibilityItems,
            facilityItems,
            roomFacilityItems,
            proudCertified,
        };
    },
});
</script>