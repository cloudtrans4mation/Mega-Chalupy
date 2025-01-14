<template>
  <section class="flex flex-col px-4 pt-9 max-md:px-5">
    <div class="flex flex-col w-full max-w-7xl mx-auto">
      <article class="flex flex-col mt-12 w-full text-sm font-semibold text-black max-md:mt-10">
        <div class="flex flex-col pb-10 w-full border-b border-solid border-black border-opacity-10">
          <div class="flex flex-col w-full">
            <!-- Render each section dynamically -->
            <section v-for="(section, sectionIndex) in amenities" :key="sectionIndex" class="mt-4">
              <h2 class="flex gap-4 items-center py-2.5 w-full text-base">
                <img   :src="section.icon" alt=""
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
                <span>{{ section.title }}</span>
              </h2>
              <ul class="list-none p-0">
                <li v-for="(amenity, amenityIndex) in section.amenities" :key="amenityIndex"
                  class="flex justify-between items-center mt-4 w-full max-md:flex-col">
                  <span class="flex-1">{{ amenity.name }}</span>
                  <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" :value="amenity.name"
                      @change="toggleAmenity(amenity.name, $event.target.checked)">
                    <span class="checkbox-custom">
                      <img   :src="amenity.image" alt=""
                        class="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px] mt-2 md:mt-0">
                      <span class="checkmark">&#10003;</span>
                    </span>
                  </label>
                </li>
              </ul>
              <img   :src="section.image" alt="" class="object-cover w-full h-auto" />
            </section>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { amenities } from '~/data/constInForms';
const emit = defineEmits(['RoomAmenitiesSelected']);
const selectedAmenities = ref<string[]>([]);
function toggleAmenity(amenity: string, isChecked: boolean) {
  if (isChecked) {
    selectedAmenities.value.push(amenity);
  } else {
    selectedAmenities.value = selectedAmenities.value.filter(item => item !== amenity);
  }
  console.log(toRaw(selectedAmenities.value))
  // Emit the updated selected amenities array
  emit('RoomAmenitiesSelected', selectedAmenities.value);
}
</script>

<style>
.checkbox-label {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-custom {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #eee;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.checkbox-custom img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.checkbox-custom .checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checkbox-input:checked~.checkbox-custom {
  background-color: #2196F3;
}

.checkbox-input:checked~.checkbox-custom .checkmark {
  opacity: 1;
}
</style>