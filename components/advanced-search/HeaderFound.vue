<template>
    <section class="cottages-found flex justify-center py-8 bg-gray-50">
        <div
            class="flex flex-col items-center p-6 w-full max-w-3xl bg-white rounded-lg shadow-md border border-neutral-200">

            <h2 class="text-2xl font-bold text-center leading-tight text-zinc-900">
                <span class="font-semibold">Cottages: </span>
                <span class="text-amber-500">{{ propertiesCount }} properties found</span>
            </h2>

        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CottagesFound',
    props: {
        propertiesCount: {
            type: Number,
            required: true,
        },
    },
});
</script>