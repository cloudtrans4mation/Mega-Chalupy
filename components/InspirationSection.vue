<template>
  <div class="relative flex justify-center items-center w-full max-w-screen-xl mx-auto overflow-hidden py-8">
    <!-- Previous Button -->
    <button @click="prevSlide" class="absolute left-4 md:left-8 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700 transition duration-300">
      <i class="fas fa-arrow-left"></i>
    </button>

    <!-- Slider Container -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Slide Items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full flex-shrink-0 flex items-center justify-center p-8 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <!-- Slide Content -->
        <div class="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h2 class="text-3xl font-extrabold mb-2">{{ slide.title }}</h2>
          <p class="text-lg mb-4">{{ slide.description }}</p>
          <button class="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            See More
          </button>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button @click="nextSlide" class="absolute right-4 md:right-8 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700 transition duration-300">
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          image: "https://i.ibb.co/qCkd9jS/img1.jpg",
          title: "Switzerland",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "https://i.ibb.co/jrRb11q/img2.jpg",
          title: "Finland",
          description: "Vestibulum euismod dolor et velit luctus, sed hendrerit urna.",
        },
        {
          image: "https://i.ibb.co/NSwVv8D/img3.jpg",
          title: "Iceland",
          description: "Curabitur id nisl non odio consequat luctus.",
        },
        {
          image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
          title: "Australia",
          description: "Integer ullamcorper risus ac metus volutpat, at ullamcorper ligula.",
        },
        {
          image: "https://i.ibb.co/jTQfmTq/img5.jpg",
          title: "Netherlands",
          description: "Proin faucibus mauris id metus elementum, non condimentum turpis.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.container{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 600px;
    background: #f5f5f5;
    box-shadow: 0 30px 50px #dbdbdb;
}

.container .slide .item{
    width: 200px;
    height: 300px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 20px;
    box-shadow: 0 30px 50px #505050;
    background-position: 50% 50%;
    background-size: cover;
    display: inline-block;
    transition: 0.5s;
}

.slide .item:nth-child(1),
.slide .item:nth-child(2){
    top: 0;
    left: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
}


.slide .item:nth-child(3){
    left: 50%;
}
.slide .item:nth-child(4){
    left: calc(50% + 220px);
}
.slide .item:nth-child(5){
    left: calc(50% + 440px);
}

/* here n = 0, 1, 2, 3,... */
.slide .item:nth-child(n + 6){
    left: calc(50% + 660px);
    opacity: 0;
}



.item .content{
    position: absolute;
    top: 50%;
    left: 100px;
    width: 300px;
    text-align: left;
    color: #eee;
    transform: translate(0, -50%);
    font-family: system-ui;
    display: none;
}


.slide .item:nth-child(2) .content{
    display: block;
}


.content .name{
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0;
    animation: animate 1s ease-in-out 1 forwards;
}

.content .des{
    margin-top: 10px;
    margin-bottom: 20px;
    opacity: 0;
    animation: animate 1s ease-in-out 0.3s 1 forwards;
}

.content button{
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    opacity: 0;
    animation: animate 1s ease-in-out 0.6s 1 forwards;
}


@keyframes animate {
    from{
        opacity: 0;
        transform: translate(0, 100px);
        filter: blur(33px);
    }

    to{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}



.button{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 20px;
}

.button button{
    width: 40px;
    height: 35px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    border: 1px solid #000;
    transition: 0.3s;
}

.button button:hover{
    background: #ababab;
    color: #fff;
}
</style>