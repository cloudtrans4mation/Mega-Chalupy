<template>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-gray-900">Next, let's describe your experience</h1>
  
      <!-- Description Section -->
      <div>
        <h2 class="text-lg font-medium text-gray-900 mb-2">What will you and your guests do?</h2>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li>Provide specific plans from start to finish, not multiple ideas or options</li>
          <li>Describe what makes your experience special—something that guests wouldn’t do on their own</li>
        </ul>
        <textarea
          rows="6"
          placeholder="Tell guests the story of what they’ll do during your experience."
          class="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div class="text-sm text-gray-500 mt-2 flex justify-between">
          <span>200 more required</span>
          <a href="#" class="text-blue-600 underline">Show examples</a>
        </div>
      </div>
  
      <!-- Duration Section -->
      <div>
        <h2 class="text-lg font-medium text-gray-900 mb-2">How long is your experience?</h2>
        <select
          class="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Duration</option>
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
          <option value="3">3 Hours</option>
          <option value="custom">Custom Duration</option>
        </select>
        <p class="text-sm text-gray-500 mt-2">
          We suggest 2 hours based on your activity. You can always change this later.
        </p>
      </div>
  
      <!-- Location Section -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-lg font-medium text-gray-900">Location type</h2>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Required</p>
      </div>
  
      <!-- Location Description -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-lg font-medium text-gray-900">Location description</h2>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
  
      <!-- Animal Species -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-lg font-medium text-gray-900">Animal species</h2>
          <a href="#" class="text-blue-600 underline">Add</a>
        </div>
        <p class="text-sm text-gray-500">Optional</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DescribeExperience",
  };
  </script>
  
  <style>
  /* Add any additional styling here, if needed */
  </style>
  