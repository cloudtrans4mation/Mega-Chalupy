<template>

    <article class="flex flex-col flex-1 shrink basis-0">

        <div class="flex gap-2.5 items-center p-5 w-24 h-24 bg-black rounded-3xl min-h-[96px]">

            <img :src="icon" class="object-contain self-stretch my-auto aspect-square w-[60px]"
                loading="lazy" />

        </div>

        <div class="flex flex-col mt-5 w-full leading-5 text-black">

            <h3 class="text-lg font-semibold tracking-normal">{{ title }}</h3>

            <p class="text-xs tracking-normal">{{ description }}</p>

        </div>

    </article>

</template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'FeatureCard',

    props: {

        icon: {

            type: String,

            required: true,

        }, title: {

            type: String,

            required: true,

        },

        description: {

            type: String,

            required: true,

        },

    },

});

</script>
