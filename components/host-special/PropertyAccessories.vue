<template>
  <section class="flex flex-col">
    <main class="flex flex-col mt-9 w-full text-sm font-medium text-black max-md:max-w-full">
      <!-- Accessory Item List -->
      <AccessoryItem
        v-for="(item, index) in accessoryItems"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        v-model:selected="item.selected"
        @update:selected="handleAccessorySelection(item)"
      />

      <!-- Help Link -->
      <a href="#" class="mt-5 text-xs tracking-wide underline text-slate-800 max-md:max-w-full">
        Get Help?
      </a>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AccessoryItem from './AccessoryItem.vue';

// Define the emit function for the 'PropertyAccessoriesSelected' event
const emit = defineEmits(['PropertyAccessoriesSelected']);

// Define the interface for AccessoryItemType
interface AccessoryItemType {
  icon: string;
  title: string;
  selected: boolean;
}

// Initialize accessory items data
const accessoryItems = ref<AccessoryItemType[]>([
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff1464450f809ca6db80563f774efe984a8623559a55aec6fb0c48d735834a1c?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Parking', selected: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef24ef7655df1581424b12564820d9f3814deae323f5c16668331d8a05c4db1b?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Kitchen', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a5f851831074e920d0bcc339018e390881de6984f4a88d170db6865dec97f267?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Bedroom', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97421152f004c297555721aa5de990447a63b9b83c5f163d552bbe5d13124ed7?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Bathroom', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f93aeb0d024f448ce8fbd4525882d674a83575df2dfb994a04f5c778cacbed39?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Living Area', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4db223adf2f65e401dc43d14f3030c0eff603da86028df564da34e93e90d7f0d?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Media & Technology', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/512fa9de683d5d642e45a0383263e606c77466d91d0091c3fb8f1f661dd21cc4?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Room Amenities', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40375c0742fa12b215ac1f8db93bf4da467a06d048008f7faa28d2bdda89ca17?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Outdoors', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2315dda55f59d3ee14fe2dd22195ddbf20040b3173a17b440627ea77ea79cece?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Food & Drink accessories', selected: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edd5df9c3a84fca3f60ab251bb2fb6a0ee61456cb68a12f886fec1c64bab04a2?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Reception services', selected: false },
]);

// Handle accessory selection change
function handleAccessorySelection(item: AccessoryItemType) {
  // Toggle the selected state
  item.selected = !item.selected;
  // Emit the event to the parent
  emit('PropertyAccessoriesSelected', item);
}
</script>
