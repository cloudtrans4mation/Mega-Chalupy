<template>

    <div
  
      :class="[
  
        'flex flex-wrap gap-5 justify-center items-center px-8 py-6 w-full rounded-3xl border-2 border-solid min-h-[106px] max-md:px-5 max-md:max-w-full',
  
        isSelected ? 'border-black bg-neutral-100' : 'border-black border-opacity-10 bg-white',
  
      ]"
  
    >
  
      <img :src="imageSrc" :alt="title" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]" />
  
      <div class="flex-1 shrink self-stretch my-auto text-base font-bold text-black min-w-[240px] max-md:max-w-full">
  
        {{ title }}
  
        <p v-if="description" class="mt-2.5 text-sm leading-none text-neutral-500 max-md:max-w-full">
  
          {{ description }}
  
        </p>
  
      </div>
  
      <div class="flex flex-col self-stretch my-auto rounded-[75px] w-[27px]">
  
        <div
  
          :class="[
  
            'flex flex-col justify-center items-center px-1 h-[27px] rounded-[75px] w-[27px]',
  
            isSelected ? 'bg-black' : 'bg-white border border-black',
  
          ]"
  
        > <div

:class="[

  'flex shrink-0 h-[15px] rounded-[75px] w-[15px]',

  isSelected ? 'bg-white' : 'bg-black',

]"

></div>

</div>

</div>

</div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({

name: 'DiscountOption',

props: {

  title: {

    type: String,

    required: true,

  },

  description: {

    type: String,

    default: '',

  },

  imageSrc: {

    type: String,

    required: true,

  },  isSelected: {

type: Boolean,

default: false,

},

},

});

</script>

