<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col max-w-[870px]">
      <div class="flex flex-col w-full max-md:max-w-full">
        <div
          class="flex overflow-hidden flex-col p-5 w-full text-base bg-white rounded-xl border border-solid border-black border-opacity-10 max-md:max-w-full"
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
            <label
              for="postal"
              class="flex-1 shrink gap-10 self-stretch h-full min-w-[240px] text-neutral-500 w-[946px] max-md:max-w-full"
            >
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
        </div>
  
        <button
          type="button"
          @click="getHelp"
          class="mt-5 text-xs tracking-wide underline decoration-auto decoration-solid text-slate-800 underline-offset-auto max-md:max-w-full"
        >
          <span class="underline">Get Help ?</span>
        </button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  
  interface FormData {
    street: string;
    apt: string;
    city: string;
    province: string;
    postal: string;
  }
  
  export default defineComponent({
    name: "AddressForm",
    emits: ["formChange"], // Emit form data to the parent
    setup(_, { emit }) {
      const formData = ref<FormData>({
        street: "",
        apt: "",
        city: "",
        province: "",
        postal: "",
      });
  
      // Watch for changes in formData and emit the updated value
      watch(
        () => formData.value,
        (newVal) => {
          emit("formChange", { ...newVal });
        },
        { deep: true } // Ensure nested properties are also observed
      );
  
      const getHelp = () => {
        // Implementation for help functionality
      };
  
      const handleSubmit = () => {
        // Optional if form submission logic is needed later
      };
  
      return {
        formData,
        getHelp,
        handleSubmit,
      };
    },
  });
  </script>
  