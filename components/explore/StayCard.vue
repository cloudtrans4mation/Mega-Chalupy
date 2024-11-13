
<template>
    <article class="card">
      <a href="#" class="card-link">
        <div class="card-image-container">
          <img :src="stay.image" :alt="stay.name" class="card-image" />
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ stay.name }}</h3>
          <!----<p class="card-properties">{{ stay.properties.toLocaleString() }} properties</p>--->
        </div>
      </a>
    </article>
  </template>
  
  <style scoped>
  .card {
    max-width: 230px;
    width: 100%;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }
  
  .card-image-container {
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  
  .card-image {
    width: 100%;
    height: 173px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .card:hover .card-image {
    transform: scale(1.05);
  }
  
  .card-content {
    padding: 1rem;
    text-align: left;
  }
  
  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }
  
  .card-properties {
    font-size: 0.875rem;
    color: #666;
  }
  </style>
  
<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface StayType {
  name: string;
  properties: number;
  image: string;
}

export default defineComponent({
  name: 'StayCard',
  props: {
    stay: {
      type: Object as PropType<StayType>,
      required: true,
    },
  },
});
</script>