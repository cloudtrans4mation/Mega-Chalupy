<template>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-gray-900">Add details about what you’ll provide</h1>
      <p class="text-gray-700">
        You can provide food and drink, special equipment, a ticket to a concert, or anything else
        special to make your guests comfortable.
      </p>
  
      <!-- Activities Section -->
      <div>
        <h2 class="text-lg font-medium text-gray-900 mb-2">
          Does your experience involve any one of the following?
        </h2>
        <p class="text-sm text-gray-500 mb-4">
          Making a selection may open additional feature detail selection options.
        </p>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="driving"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="driving" class="text-gray-700">Driving (Car, ATV, Motorized Scooter, Snowmobile, etc.)</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="boating"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="boating" class="text-gray-700">Boating (Motorized boat, sailboat, waterski, parasailing, etc.)</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="motorcycling"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="motorcycling" class="text-gray-700">Motorcycling</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="flying"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="flying" class="text-gray-700">Flying (Plane, Helicopter, or Hot Air Balloon)</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="none"
              class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="none" class="text-gray-700">My experience does not include any of these activities</label>
          </div>
        </div>
      </div>
  
      <!-- Details Section -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-900">Food</h3>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
  
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-900">Drinks</h3>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
  
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-900">Tickets</h3>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
  
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-900">Transportation</h3>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Bus, Train</p>
      </div>
  
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-900">Equipment</h3>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProvideDetails",
  };
  </script>
  
  <style>
  /* Add any custom styling if necessary */
  </style>
  