<template>
  <section class="flex flex-col gap-12 p-6 bg-gray-50 rounded-lg shadow-md">
    <!-- Cot Availability -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Cot Availability</h3>
      <div
        class="flex gap-3 items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200"
      >
        <input
          type="number"
          id="squareMeterCount"
          :value="squareMeterCount"
          placeholder="Enter square meter count"
          class="w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="$emit('update:squareMeterCount', $event.target.value)"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
          alt=""
          class="h-5"
        />
      </div>
    </div>

    <!-- Owner's Message -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Owner's Message</h3>
      <div
        class="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200"
      >
        <textarea
          id="ownerMessage"
          placeholder="Enter your custom message for hosts"
          class="w-full h-24 resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
        ></textarea>
      </div>
    </div>

    <!-- Check-in & Check-out -->
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Check-in & Check-out Guidelines</h3>
      <div class="flex flex-wrap gap-4">
        <!-- Check-in -->
        <div
          class="flex gap-3 items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200"
        >
          <input
            type="date"
            id="checkInDate"
            placeholder="Check-in Date"
            class="w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :value="checkIn"
            @input="$emit('update:checkIn', $event.target.value)"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt=""
            class="h-5"
          />
        </div>
        <!-- Check-out -->
        <div
          class="flex gap-3 items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md focus-within:ring focus-within:ring-blue-500 transition duration-200"
        >
          <input
            type="date"
            id="checkOutDate"
            placeholder="Check-out Date"
            class="w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :value="checkOut"
            @input="$emit('update:checkOut', $event.target.value)"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b73d3f214689eb3f115a12f33782f63308a49aceec3cd2ea4d1bc900aead8ca?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt=""
            class="h-5"
          />
        </div>
      </div>
    </div>

    <!-- Additional Inputs -->
    <div class="flex flex-wrap gap-4">
      <!-- Dropdown with Label -->
      <div class="w-full sm:w-1/2">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Children Guidelines</h3>
        <select
          id="childrenAllowance"
          :value="childrenAllowance"
          class="w-full p-4 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          @change="$emit('update:childrenAllowance', $event.target.value)"
        >
          <option value="">Select option</option>
          <option value="allowed">Allowed</option>
          <option value="not-allowed">Not Allowed</option>
        </select>
      </div>

      <!-- Numeric Input -->
      <div class="w-full sm:w-1/2">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Number of KM</h3>
        <input
          type="number"
          id="kmInput"
          :value="km"
          placeholder="Type number of KM"
          class="w-full p-4 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="$emit('update:km', $event.target.value)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General Styles */
section {
  background-color: #f9f9f9;
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropertyGuidelines',

  props: {
    checkIn: {
      type: String,
      required: false,
      default: ''
    },
    checkOut: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    eventsAllowance: {
      type: String,
      required: false,
      default: '',
    },
    quietHours: {
      type: String,
      required: false,
      default: '',
    },
    squareMeterCount: {
      type: Number,
      required: false,
      default: 0,
    },
    childrenAllowance: {
      type: String,
      required: false,
      default: '',
    },
    activity: {
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

  methods: {
    // Emit all form data as a single object
    emitAllFields() {
      const data = {
        checkInDate: this.checkIn,
        checkOutDate: this.checkOut,
        ownerMessage: this.value,
        eventsAllowance: this.eventsAllowance,
        quietHours: this.quietHours,
        squareMeterCount: this.squareMeterCount,
        childrenAllowance: this.childrenAllowance,
        activity: this.activity,
        km: this.km,
        cotAvailability: this.cotAvailability
      };
      
      // Emit the entire form data object to the parent
      this.$emit('PropertyGuidelinesSelected', data);
    }
  },

  watch: {
    // Watch for changes in any property and emit the updated data
    checkIn() {
      this.emitAllFields();
    },
    checkOut() {
      this.emitAllFields();
    },
    value() {
      this.emitAllFields();
    },
    eventsAllowance() {
      this.emitAllFields();
    },
    quietHours() {
      this.emitAllFields();
    },
    squareMeterCount() {
      this.emitAllFields();
    },
    childrenAllowance() {
      this.emitAllFields();
    },
    activity() {
      this.emitAllFields();
    },
    km() {
      this.emitAllFields();
    },
    cotAvailability() {
      this.emitAllFields();
    }
  },

  // Optional lifecycle hook to emit data on component mounted
  mounted() {
    this.emitAllFields();
  }
});
</script>


