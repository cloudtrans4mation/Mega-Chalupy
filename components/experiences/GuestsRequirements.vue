<template>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-6">
      <!-- Section 1: Will guests need to bring anything -->
      <div>
        <h1 class="text-xl font-bold text-gray-900">Will guests need to bring anything to the experience?</h1>
        <div class="space-y-4 mt-4">
          <button
            @click="handleSelection('yes')"
            :class="getButtonClass('yes')"
            class="w-full p-4 border rounded-lg text-left transition-all duration-150"
          >
            Yes
          </button>
          <button
            @click="handleSelection('no')"
            :class="getButtonClass('no')"
            class="w-full p-4 border rounded-lg text-left transition-all duration-150"
          >
            No, guests just need to show up
          </button>
        </div>
      </div>
  
      <!-- Section 2: Who can attend your experience -->
      <div>
        <h1 class="text-xl font-bold text-gray-900">Who can attend your experience?</h1>
        <p class="text-gray-700 mt-2">
          Keep in mind that someone booking your experience might book spots for other guests. If there are strict
          requirements around age, skill level, or certifications, include them here.
        </p>
  
        <!-- Minimum Age Dropdown -->
        <div class="mt-4">
          <label class="block text-gray-800 font-medium">Minimum age</label>
          <select
            v-model="minimumAge"
            class="w-full mt-1 p-2 border rounded-lg focus:ring-gray-300 focus:border-gray-400"
          >
            <option v-for="age in ageOptions" :key="age" :value="age">Minimum age {{ age }}</option>
          </select>
        </div>
  
        <!-- Checkbox: Parents can bring kids -->
        <div class="mt-4">
          <label class="flex items-start space-x-2">
            <input
              type="checkbox"
              v-model="allowKids"
              class="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-400"
            />
            <span class="text-gray-700">Parents can bring kids under 2 years</span>
          </label>
        </div>
  
        <!-- Accessibility Features -->
        <div class="mt-6">
          <h2 class="font-medium text-gray-800">Does your experience have any accessibility features? (optional)</h2>
          <p class="text-gray-600 mt-1 text-sm">
            Changes are reviewed before they go live on your Experience page. Learn more about
            <a href="#" class="text-blue-500 underline">how accessibility features work</a>.
          </p>
          <div class="space-y-3 mt-4">
            <label class="flex items-start space-x-2">
              <input
                type="checkbox"
                v-model="accessibilityFeatures.communication"
                class="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-400"
              />
              <span class="text-gray-700">
                Communication accessibility features
              </span>
            </label>
            <label class="flex items-start space-x-2">
              <input
                type="checkbox"
                v-model="accessibilityFeatures.mobility"
                class="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-400"
              />
              <span class="text-gray-700">
                Mobility accessibility features
              </span>
            </label>
            <label class="flex items-start space-x-2">
              <input
                type="checkbox"
                v-model="accessibilityFeatures.sensory"
                class="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-400"
              />
              <span class="text-gray-700">
                Sensory accessibility features
              </span>
            </label>
          </div>
        </div>
  
        <!-- Activity Level -->
        <div class="mt-6">
          <h2 class="font-medium text-gray-800">What activity level should people expect?</h2>
          <div class="flex space-x-4 mt-2">
            <button
              v-for="level in activityLevels"
              :key="level"
              @click="setActivityLevel(level)"
              :class="activityLevel === level ? 'bg-gray-100 border-gray-800' : 'bg-white border-gray-300'"
              class="px-4 py-2 border rounded-lg text-gray-700"
            >
              {{ level }}
            </button>
          </div>
        </div>
  
        <!-- Skill Level -->
        <div class="mt-6">
          <h2 class="font-medium text-gray-800">What skill level is required?</h2>
          <div class="flex space-x-4 mt-2">
            <button
              v-for="skill in skillLevels"
              :key="skill"
              @click="setSkillLevel(skill)"
              :class="skillLevel === skill ? 'bg-gray-100 border-gray-800' : 'bg-white border-gray-300'"
              class="px-4 py-2 border rounded-lg text-gray-700"
            >
              {{ skill }}
            </button>
          </div>
        </div>
  
        <!-- Additional Requirements -->
        <div class="mt-6">
          <label class="block text-gray-800 font-medium">Additional requirements (optional)</label>
          <textarea
            v-model="additionalRequirements"
            placeholder="E.g. Guests should have prior surfing experience..."
            maxlength="850"
            class="w-full mt-1 p-2 border rounded-lg focus:ring-gray-300 focus:border-gray-400"
          ></textarea>
          <p class="text-sm text-gray-500 text-right mt-1">{{ additionalRequirements.length }}/850</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "ExperienceForm",
    setup() {
      // Section 1
      const selectedOption = ref("");
  
      const handleSelection = (option) => {
        selectedOption.value = option;
      };
  
      const getButtonClass = (option) => {
        return selectedOption.value === option
          ? "bg-gray-100 border-gray-800 text-gray-900"
          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
      };
  
      // Section 2
      const minimumAge = ref(18);
      const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18); // 18 to 100
      const allowKids = ref(false);
  
      const accessibilityFeatures = ref({
        communication: false,
        mobility: false,
        sensory: false,
      });
  
      const activityLevel = ref("");
      const activityLevels = ["Light", "Moderate", "Strenuous", "Extreme"];
  
      const setActivityLevel = (level) => {
        activityLevel.value = level;
      };
  
      const skillLevel = ref("");
      const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  
      const setSkillLevel = (level) => {
        skillLevel.value = level;
      };
  
      const additionalRequirements = ref("");
  
      return {
        selectedOption,
        handleSelection,
        getButtonClass,
        minimumAge,
        ageOptions,
        allowKids,
        accessibilityFeatures,
        activityLevel,
        activityLevels,
        setActivityLevel,
        skillLevel,
        skillLevels,
        setSkillLevel,
        additionalRequirements,
      };
    },
  };
  </script>
  
  <style>
  /* Add any global or custom styles as needed */
  </style>
  