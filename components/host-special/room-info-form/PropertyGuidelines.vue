<template>
  <section class="bg-white flex flex-col gap-12 p-6 bg-gray-50 rounded-lg shadow-md">
    <!-- Cot Availability -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Cot Availability</h3>
      <div class="p-4 bg-white border rounded-lg shadow-sm">
        <select id="cotAvailability" v-model="formData.cotAvailability"
          class="w-full p-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
      </div>
    </div>

    <!-- Owner's Message -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Owner's Message</h3>
      <div
        class="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200">
        <textarea id="ownerMessage" v-model="formData.ownerMessage" placeholder="Enter your custom message for hosts"
          class="w-full h-24 resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
    </div>

    <!-- Check-in & Check-out -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Check-in & Check-out Guidelines</h3>
      <div class="flex flex-wrap gap-4">
        <!-- Check-in -->
        <div
          class="flex gap-3 items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200">
          <input type="date" id="checkInDate" v-model="formData.checkIn"
            class="w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @blur="validateDates" />
        </div>
        <!-- Check-out -->
        <div
          class="flex gap-3 items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200">
          <input type="date" id="checkOutDate" v-model="formData.checkOut"
            class="w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @blur="validateDates" />
        </div>
      </div>
      <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
    </div>
    <!-- Additional Inputs -->
    <div class="flex flex-wrap gap-4">
      <!-- Dropdown with Label -->
      <div class="w-full sm:w-1/2">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Children Guidelines</h3>
        <select id="childrenAllowance" v-model="formData.childrenAllowance"
          class="w-full p-4 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select option</option>
          <option value="allowed">Allowed</option>
          <option value="not-allowed">Not Allowed</option>
        </select>
      </div>

      <!-- Numeric Input -->
      <div class="w-full sm:w-1/2">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Number of KM</h3>
        <input type="number" id="kmInput" v-model="formData.km" placeholder="Type number of KM"
          class="w-full p-4 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

export default defineComponent({
  name: 'PropertyGuidelines',
  props: {
    checkIn: {
      type: String,
      required: false,
      default: '',
    },
    checkOut: {
      type: String,
      required: false,
      default: '',
    },
    ownerMessage: {
      type: String,
      required: false,
      default: '',
    },
    childrenAllowance: {
      type: String,
      required: false,
      default: '',
    },
    km: {
      type: [String, Number],
      required: false,
      default: '',
    },
    cotAvailability: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['PropertyGuidelinesSelected'],
  setup(props, { emit }) {
    // Initialize form data with prop values
    const formData = reactive({
      checkIn: props.checkIn,
      checkOut: props.checkOut,
      ownerMessage: props.ownerMessage,
      childrenAllowance: props.childrenAllowance,
      km: props.km,
      cotAvailability: props.cotAvailability,
    });

    // Error message for validation
    const errorMessage = ref('');

    // Validation function for dates
    const validateDates = () => {
      if (formData.checkIn && formData.checkOut) {
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);

        if (checkOutDate < checkInDate) {
          errorMessage.value = 'Check-out date cannot be before check-in date.';
        } else {
          errorMessage.value = '';
        }
      }
    };

    // Watch for changes in formData and emit updated data
    watch(
      formData,
      (newData) => {
        validateDates();
        emit('PropertyGuidelinesSelected', { ...newData });
        console.log('PropertyGuidelinesSelected', { ...newData });
      },
      { deep: true, immediate: true }
    );

    return {
      formData,
      errorMessage,
      validateDates,
    };
  },
});
</script>



<style scoped>
/* General Styles */
section {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
  margin-bottom: 1rem;
}

/* Input Styles */
input,
textarea,
select {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #66afe9;
  box-shadow: 0 0 0 3px rgba(102, 175, 233, 0.5);
  outline: none;
}

/* Placeholder Styles */
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

/* Container Styles */
.flex.gap-3.items-center.p-4.bg-white.border.rounded-lg.shadow-sm {
  border-color: #e2e8f0;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.flex.gap-3.items-center.p-4.bg-white.border.rounded-lg.shadow-sm:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.flex.gap-3.items-center.p-4.bg-white.border.rounded-lg.shadow-sm:focus-within {
  border-color: #66afe9;
  box-shadow: 0 0 0 3px rgba(102, 175, 233, 0.5);
}

/* Image Styles */
img {
  height: 1.25rem;
  margin-left: 0.5rem;
}
</style>
