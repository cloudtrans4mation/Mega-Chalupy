<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col max-w-[870px]">
      <div class="flex flex-col w-full max-md:max-w-full"></div>
      <div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col w-full max-md:max-w-full">
          <button
            type="button"
            @click="toggleCountrySelect"
            class="flex flex-wrap gap-2.5 justify-center items-center py-7 pr-8 pl-5 w-full bg-white rounded-3xl border border-solid border-black border-opacity-10 min-h-[106px] max-md:pr-5 max-md:max-w-full"
            aria-expanded="false"
            aria-haspopup="listbox"
          >
            <div
              class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full"
            >
              <div class="text-sm leading-none text-slate-800 max-md:max-w-full">
                <span class="text-neutral-500">Please choose ideal</span>...
              </div>
              <div class="mt-4 text-base font-medium text-black">
                Czech Republic
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5b20c0d534a34f0091744edaaeed1afd/5f3b68988f109bcb9492403328d94b38983a3661c1ee6a231a935b0dea36f8ec?apiKey=5b20c0d534a34f0091744edaaeed1afd&"
              class="object-contain shrink-0 self-stretch my-auto w-3 rounded-sm aspect-[2]"
              alt=""
            />
          </button>
  
          <div
            class="flex overflow-hidden flex-col p-5 mt-5 w-full text-base bg-white rounded-xl border border-solid border-black border-opacity-10 max-md:max-w-full"
          >
            <div class="flex gap-10 justify-center items-center w-full text-neutral-500 max-md:max-w-full">
              <label for="street" class="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                Street address
              </label>
            </div>
            <input
              type="text"
              id="street"
              v-model="formData.street"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
              required
            />
  
            <div class="flex gap-10 justify-center items-center mt-5 w-full text-neutral-500 max-md:max-w-full">
              <label for="apt" class="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                Apt, floor, building (if applicable)
              </label>
            </div>
            <input
              type="text"
              id="apt"
              v-model="formData.apt"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
            />
  
            <div class="flex gap-10 justify-center items-center mt-5 w-full text-neutral-500 max-md:max-w-full">
              <label for="city" class="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                City / town / village
              </label>
            </div>
            <input
              type="text"
              id="city"
              v-model="formData.city"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
              required
            />
  
            <div class="flex gap-10 justify-center items-center mt-5 w-full text-neutral-500 max-md:max-w-full">
              <label for="province" class="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                Province / State / Territory
              </label>
            </div>
            <input
              type="text"
              id="province"
              v-model="formData.province"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
              required
            />
  
            <div class="flex gap-10 mt-5 w-full max-md:max-w-full">
              <label for="postal" class="flex-1 shrink gap-10 self-stretch h-full min-w-[240px] text-neutral-500 w-[946px] max-md:max-w-full">
                Postal Code
              </label>
              <div class="gap-3.5 self-stretch my-auto font-bold text-black whitespace-nowrap">
                {{ formData.postal.length }}
              </div>
            </div>
            <input
              type="text"
              id="postal"
              v-model="formData.postal"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
              required
            />
  
            <div class="flex gap-10 justify-center items-center mt-5 w-full whitespace-nowrap text-neutral-500 max-md:max-w-full">
              <label for="country" class="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                Country
              </label>
            </div>
            <input
              type="text"
              id="country"
              v-model="formData.country"
              class="mt-5 w-full min-h-0 border border-gray-200 border-solid max-md:max-w-full p-2"
              required
            />
          </div>
  
          <button
            type="button"
            @click="getHelp"
            class="mt-5 text-xs tracking-wide underline decoration-auto decoration-solid text-slate-800 underline-offset-auto max-md:max-w-full"
          >
            <span class="underline">Get Help ?</span>
          </button>
        </div>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  interface FormData {
    street: string
    apt: string
    city: string
    province: string
    postal: string
    country: string
  }
  
  export default defineComponent({
    name: 'AddressForm',
    setup() {
      const formData = ref<FormData>({
        street: '',
        apt: '',
        city: '',
        province: '',
        postal: '',
        country: ''
      })
  
      const toggleCountrySelect = () => {
        // Implementation for country selection
      }
  
      const getHelp = () => {
        // Implementation for help functionality
      }
  
      const handleSubmit = () => {
        // Form submission logic
      }
  
      return {
        formData,
        toggleCountrySelect,
        getHelp,
        handleSubmit
      }
    }
  })
  </script>