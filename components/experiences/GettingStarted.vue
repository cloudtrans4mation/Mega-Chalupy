<template>
  <div class="relative w-full h-full max-w-2xl px-4 mx-auto my-6 mt-16 md:h-auto lg:h-auto md:px-0">
    <div class="container">
      <!-- Left Section: Background Image -->
      <div class="image-section"></div>

      <!-- Right Section: Text and Button -->
      <div class="text-section">
        <h1>This is the beginning of your new adventure as a host</h1>
        <p>
          Submit your experience, and it will be reviewed to ensure it meets our
          <a href="#">criteria and requirements</a>. Many factors are considered for the approval of an experience.
          If your experience is approved, you can start hosting participants.
        </p>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GettingStarted',
  setup() {
    const startExperience = () => {
      alert('Commencer votre nouvelle aventure!');
    };

    return { startExperience };
  },
});
</script>

<style scoped>
/* Container Layout */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: auto;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

/* Left Section: Responsive Background Image */
.image-section {
  width: 100%;
  height: 500px;
  background-image: url('https://a0.muscache.com/im/pictures/1ea7f91c-d4ec-4bd3-b35c-e7da0b41f1cf.jpg?im_w=1440');
  /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  /* Adjust image height on smaller screens */
  @media (max-width: 768px) {
    height: 300px;
  }
}

/* Right Section: Text and Button */
.text-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #000;
  color: white;
  border-radius: 8px;

  /* Center content on smaller screens */
  @media (max-width: 768px) {
    padding: 15px;
  }
}

.text-section h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;

  /* Responsive text size */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.text-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;

  /* Responsive text size */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

.text-section a {
  color: #ff385c;
  text-decoration: none;
}

.text-section a:hover {
  text-decoration: underline;
}

/* Button Styles */
.start-button {
  background-color: #ff385c;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-start;

  /* Center button on mobile */
  @media (max-width: 768px) {
    align-self: center;
  }
}

.start-button:hover {
  background-color: #e81e5c;
}
</style>