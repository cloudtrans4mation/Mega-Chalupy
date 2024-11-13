<template>
    <button :class="[
        'flex overflow-hidden flex-col justify-center items-center px-2.5 py-8 rounded-2xl border border-solid min-h-[122px] w-[114px]',
        selected ? 'border-2 border-black bg-neutral-100 text-neutral-800' : 'bg-white border-zinc-300 text-neutral-500'
    ]" @click="toggleFold">
        <transition name="fold">
            <img v-if="!isFolded" :src="`calendar.svg`" class="object-contain w-7 aspect-[0.87]" />
            <img v-else :src="`/calndarfolded.svg`" class="object-contain w-7 aspect-[0.87]" />
        </transition>
        <div class="mt-2.5">{{ month }}</div>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue'; // Type-only import for PropType

export default defineComponent({
    name: 'MonthButton',
    props: {
        month: {
            type: String as PropType<string>,
            required: true,
        },
        selected: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    methods: {
        getImageNumber(): number {
            const monthMap: { [key: string]: number } = {
                January: 1,
                February: 2,
                March: 3,
                April: 4,
                May: 5,
                June: 6,
                July: 7,
                August: 8,
                September: 9,
                October: 10,
                November: 11,
                December: 12,
            };
            return monthMap[this.month] || 1;
        },
    },

    setup(props) {
        const isFolded = ref(false);

        const toggleFold = () => {
            isFolded.value = !isFolded.value;
        };

        return {
            isFolded,
            toggleFold,
        };
    },
});
</script>
<style scoped>
.fold-enter-active,
.fold-leave-active {
    transition: transform 0.5s;
}

.fold-enter,
.fold-leave-to {
    transform: scaleY(0);
}
</style>