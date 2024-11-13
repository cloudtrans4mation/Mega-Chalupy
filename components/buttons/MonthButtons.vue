<template>
    <div class="flex overflow-x-auto mt-4 gap-4 pb-2 custom-scrollbar">
      <MonthButton month="Septembre" year="2024" />
      <MonthButton month="Octobre" year="2024" />
      <MonthButton month="Novembre" year="2024" />
      <MonthButton month="Décembre" year="2024" />
      <MonthButton month="Janvier" year="2025" />
      <MonthButton month="Février" year="2025" />
      <MonthButton month="Avril" year="2025" />
      <MonthButton month="May" year="2025" />
      <MonthButton month="June" year="2025" />
      <MonthButton month="July" year="2025" />
      <MonthButton month="August" year="2025" />

    </div>
  </template>
  
  <script lang="ts">
  import MonthButton from '../date-home-search/MonthButton.vue';
  
  export default defineComponent({
    name: 'MonthButtons',
    components: {
      MonthButton
    }
  });
  </script>
  
  <style scoped>
  .custom-scrollbar::-webkit-scrollbar {
    height: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  
  @media (min-width: 640px) {
    .custom-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .custom-scrollbar::-webkit-scrollbar {
      display: none;
    }
  }
  
  .flex {
    display: flex;
    gap: 16px;
    padding-bottom: 8px;
    margin-top: 16px;
    overflow-x: auto;
  }
  
  .flex > * {
    flex-shrink: 0;
  }
  
  .month-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-width: 100px;
    text-align: center;
  }
  
  .month-button img {
    width: 24px;
    height: 24px;
  }
  
  .month-button .month {
    font-weight: bold;
    margin-top: 8px;
  }
  
  .month-button .year {
    color: #888;
    margin-top: 4px;
  }
  </style>
  