<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col w-full max-w-xl">

      <!-- Room Inputs -->
      <div class="flex flex-wrap gap-5 justify-between w-full">
        <!-- Number of Rooms Input -->
        <div class="flex flex-col w-full md:w-1/2">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Number of Rooms</h3>
          <input type="number" placeholder="Enter number of rooms"
            class="w-full p-3 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="(e) => updateRooms(e.target.value)" />
        </div>

        <!-- Square Meter Count Input -->
        <div class="flex flex-col w-full md:w-1/2">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Square Meter Count</h3>
          <input type="number" placeholder="Enter square meter count"
            class="w-full p-3 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="(e) => updateSquareMeterCount(e.target.value)" />
        </div>
      </div>

      <!-- Smoking Allowance -->
      <div class="flex flex-col mt-8 w-full">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Smoking Allowance</h3>
        <div class="p-4 bg-white rounded-lg shadow-sm">
          <label class="flex items-center gap-3">
            <input type="radio" name="smokingAllowance" value="allowed" class="focus:ring-2 focus:ring-blue-500"
              @change="() => updateSmokingAllowance('allowed')" />
            Allowed
          </label>
          <label class="flex items-center gap-3 mt-3">
            <input type="radio" name="smokingAllowance" value="not-allowed" class="focus:ring-2 focus:ring-blue-500"
              @change="() => updateSmokingAllowance('not-allowed')" />
            Not Allowed
          </label>
        </div>
      </div>

    </div>
  </section>
</template>



<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { defineEmits } from 'vue';

// Define emits for the parent component
const emit = defineEmits(['updateRoomInfo']);

// State to hold values
const numberOfRooms = ref<number | null>(null);
const squareMeterCount = ref<number | null>(null);
const smokingAllowance = ref<string>('');

// Computed array to consolidate values as a list
const roomInfoList = computed(() => [
  numberOfRooms.value,
  squareMeterCount.value,
  smokingAllowance.value,
]);

// Watch for changes in roomInfoList and emit to parent component
watch(roomInfoList, (newValue) => {
  emit('updateRoomInfo', newValue);
  console.log('Room Info List:', newValue);
});

// Handlers for each emitted value
function updateRooms(value: string) {
  numberOfRooms.value = Number(value);
}

function updateSquareMeterCount(value: string) {
  squareMeterCount.value = Number(value);
}

function updateSmokingAllowance(value: string) {
  smokingAllowance.value = value;
}
</script>
