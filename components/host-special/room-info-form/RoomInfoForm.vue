<template>
  <section class="flex flex-col">
    <div class="flex flex-col w-full max-md:max-w-full"></div>

    <div class="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col w-full max-md:max-w-full">

        <!-- Room Inputs -->
        <div class="flex flex-wrap gap-5 justify-center items-center w-full max-md:max-w-full">
          <RoomInput 
            label="Number of Rooms" 
            placeholder="Please enter number of rooms" 
            @updateValue="updateRooms"
          />
          <RoomInput 
            label="Square meter count" 
            placeholder="Please enter Square meter count" 
            @updateValue="updateSquareMeterCount"
          />
        </div>

        <!-- Smoking Allowance Dropdown -->
        <div class="flex gap-5 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <SmokingAllowance @updateSmokingAllowance="updateSmokingAllowance" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { defineEmits } from 'vue';
import RoomInput from './RoomInput.vue';
import SmokingAllowance from './SmokingAllowance.vue';

// Define emits for the parent component
const emit = defineEmits(['updateRoomInfo']);

// State to hold emitted values
const numberOfRooms = ref<number | null>(null);
const squareMeterCount = ref<number | null>(null);
const smokingAllowance = ref<string>('');

// Computed object to consolidate values
const roomInfo = computed(() => ({
  numberOfRooms: numberOfRooms.value,
  squareMeterCount: squareMeterCount.value,
  smokingAllowance: smokingAllowance.value,
}));

// Watch for changes in roomInfo and emit to parent component
watch(roomInfo, (newValue) => {
  emit('updateRoomInfo', newValue);
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
