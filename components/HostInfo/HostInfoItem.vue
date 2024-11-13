<template>

    <li class="flex gap-3 items-center mt-5 first:mt-0">

        <div class="flex flex-col self-stretch my-auto w-6">

            <img :src="icon" class="object-contain w-6 aspect-square" />

        </div>

        <p class="self-stretch my-auto text-sm leading-none text-neutral-800">

            <span class="sr-only">{{ label }}:</span>

            {{ value }}

        </p>

    </li>

</template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'HostInfoItem',

    props: {

        icon: {

            type: String,

            required: true,

        }, label: {

            type: String,

            required: true,

        },

        value: {

            type: String,

            required: true,

        },

    },

});

</script>