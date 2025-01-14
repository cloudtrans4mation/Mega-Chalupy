<template>
  <div :class="[ 
    'flex gap-6 justify-between p-8 pb-16 w-full rounded-3xl border-2 border-solid min-h-[106px] max-md:px-5 max-md:max-w-full',
    selected ? 'bg-neutral-100 border-black' : 'bg-white border-black border-opacity-10',
    'max-md:flex-col max-md:gap-6 max-md:items-start'
  ]">
    <!-- Image and Title Section -->
    <div class="flex items-center gap-6 w-full md:w-auto lg:w-[633px]">
      <img :src="icon" :alt="title" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
      <span class="my-auto">{{ title }}</span>
    </div>
    <!-- Checkbox Section -->
    <label class="checkbox-label">
      <input 
        type="checkbox" 
        class="checkbox-input" 
        :checked="selected" 
        @change="handleChange" 
      />
      <span class="checkbox-custom">
        <img  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/466c3b17040ec4fe2c82fa66cd685d4ef01d53b257e7e62f263d2503632fe529?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
          alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px] mt-2 md:mt-0">
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccessoryItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:selected', 'emit-title'], // Emit for 'selected' and title

  methods: {
    handleChange(event: Event) {
      const isChecked = (event.target as HTMLInputElement).checked;
      this.$emit('update:selected', isChecked); // Emit the updated 'selected' state
      this.$emit('emit-title', this.title); // Emit the 'title' to the parent
      console.log('Checkbox changed:', isChecked, 'Title:', this.title);
    },
  },
});
</script>

<style scoped>
.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
}
.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkbox-custom {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid black;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.checkbox-custom:hover {
  background-color: #f0f0f0;
  border-color: #333;
}
.checkmark {
  font-size: 18px;
  color: black;
}
</style>
