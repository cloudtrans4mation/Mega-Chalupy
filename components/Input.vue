<script setup lang="ts">
type InputProps = {
  id: string;
  label: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  error?: string;
  currency?: string;
};

const { type = 'text', currency = 'USD' } = defineProps<InputProps>();
const model = defineModel();

// Available currencies and their icons
const currencies = [
  { code: 'USD', icon: '/usd.png', label: 'USD' },
  { code: 'EUR', icon: '/euro.png', label: 'EUR' },
  { code: 'GBP', icon: '/pound.png', label: 'GBP' },
  { code: 'CZK', icon: '/koruna.png', label: 'CZK' },
  { code: 'JPY', icon: '/yen.png', label: 'JPY' },
];

const selectedCurrency = ref(currency); // Currency selection
</script>

<template>
  <div class="relative w-full flex items-center space-x-2">
    <!-- Currency Select Dropdown -->
    <div class="relative" v-if="formatPrice">
      <select
        v-model="selectedCurrency"
        class="block w-20 p-2 text-sm border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:border-black"
      >
        <option
          v-for="currency in currencies"
          :key="currency.code"
          :value="currency.code"
        >
          {{ currency.label }}
        </option>
      </select>
    </div>

    <!-- Input Field -->
    <div class="relative flex-1">
      <input
        :class="`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:bg-gray-300 disabled:border-0 disabled:cursor-not-allowed disabled:text-gray-500 ${
          !!error ? 'border-rose-500' : 'focus:border-black'
        }`"
        :id="id"
        :type="type"
        :disabled="disabled"
        placeholder=" "
        v-model="model"
      />
      <!-- Label -->
      <label
        :class="`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          !!error ? 'text-rose-500' : 'text-zinc-400'
        }`"
      >
        {{ label }}
      </label>
    </div>
  </div>

  <!-- Error Message -->
  <p v-if="error" class="mt-1 text-sm text-rose-500">{{ error }}</p>
</template>

<style scoped>
select {
  /* Ensure the select dropdown is clean and fits visually */
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width=".6" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 0.75rem auto;
}
</style>
