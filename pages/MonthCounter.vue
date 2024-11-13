<template>
  <div class="month-picker">
    <!-- Outer Circle Container -->
    <div
      class="circle-container"
      @mousedown="startDragging"
      @mousemove="onDragging"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      @touchstart="startDragging"
      @touchmove="onDragging"
      @touchend="stopDragging"
      role="slider"
      aria-valuemin="1"
      aria-valuemax="12"
      :aria-valuenow="selectedMonth"
    >
      <!-- Rotating Progress Bar -->
      <div class="progress-bar" :style="{ transform: `rotate(${rotation}deg)` }">
        <div class="progress-indicator" :style="{ backgroundColor: dynamicColor }"></div>
      </div>
      <!-- Inner Circle with Month Info -->
      <div class="inner-circle">
        <div class="month-info">
          <span class="month-number">{{ selectedMonth }}</span>
          <span class="month-text">{{ getDurationText(selectedMonth) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CircularMonthPicker',
  setup() {
    const selectedMonth = ref(1);
    const rotation = ref(0); // Rotation angle
    const isDragging = ref(false);

    // Compute the dynamic color based on the selected month
    const dynamicColor = computed(() => {
      const hue = 340 - (selectedMonth.value - 1) * 20; // Hue ranges from 340 to 100
      const lightness = 50 + (selectedMonth.value - 1) * 4; // Lightness ranges from 50% to 94%
      return `hsl(${hue}, 100%, ${lightness}%)`;
    });

    // Function to get the duration text
    const getDurationText = (month: number) => (month === 1 ? 'month' : 'months');

    // Start dragging event
    const startDragging = (event: MouseEvent | TouchEvent) => {
      isDragging.value = true;
      onDragging(event); // Call onDragging to immediately update on mousedown or touchstart
    };

    // Stop dragging event
    const stopDragging = () => {
      isDragging.value = false;
    };

    // Update the rotation angle while dragging
    const onDragging = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.value) return;

      const circle = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const clientX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
      const clientY = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY);

      const x = clientX - circle.left - circle.width / 2;
      const y = clientY - circle.top - circle.height / 2;
      const angle = (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360;

      // Update the rotation
      rotation.value = angle;

      // Update the selected month
      selectedMonth.value = Math.ceil((angle / 360) * 12) || 1;
    };

    return {
      selectedMonth,
      rotation,
      isDragging,
      startDragging,
      stopDragging,
      onDragging,
      getDurationText,
      dynamicColor,
    };
  },
});
</script>

<style scoped>
.month-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.circle-container {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 60%, transparent 60%),
              radial-gradient(circle, #f3f3f3 100%, transparent 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.progress-bar {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease;
}

.progress-indicator {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff5a5f;
  border: 6px solid white;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  z-index: 1;
  transition: transform 0.1s ease, background-color 0.3s ease; /* Smooth color transition */
}

.inner-circle {
  position: absolute;
  width: 150px; /* Make the inner circle more prominent */
  height: 150px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.month-info {
  text-align: center;
}

.month-number {
  font-size: 3rem; /* Larger font size for the month number */
  font-weight: bold;
  color: #333;
}

.month-text {
  font-size: 1.2rem; /* Slightly larger font size for better readability */
  color: #666;
}
</style>
