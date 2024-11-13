<template>


    <div id="demo"></div>

    <div class="details" id="details-even">
        <div class="place-box">
            <div class="text">Switzerland Alps</div>
        </div>
        <div class="title-box-1">
            <div class="title-1">SAINT</div>
        </div>
        <div class="title-box-2">
            <div class="title-2">ANTONIEN</div>
        </div>
        <div class="desc">
            Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility
            and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking
            and mountain biking during the warmer months.
        </div>
        <div class="cta">
            <button class="bookmark">
                <i class='bx bx-bookmarks'></i>
            </button>&nbsp;
            <button class="star">
                <i class='bx bx-star'></i>
            </button>
            <button class="discover"><i class='bx bx-search-alt'></i> Discover Location</button>
        </div>
    </div>

    <div class="details" id="details-odd">
        <div class="place-box">
            <div class="text">Switzerland Alps</div>
        </div>
        <div class="title-box-1">
            <div class="title-1">SAINT </div>
        </div>
        <div class="title-box-2">
            <div class="title-2">ANTONIEN</div>
        </div>
        <div class="desc">
            Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility
            and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking
            and mountain biking during the warmer months.
        </div>
        <div class="cta">
            <button class="bookmark">
                <i class='bx bx-bookmarks'></i>
            </button>&nbsp;
            <button class="star">
                <i class='bx bx-star'></i>
            </button>
            <button class="discover"><i class='bx bx-search-alt'></i> Discover Location</button>
        </div>
    </div>

    <div class="pagination" id="pagination">
        <div class="arrow arrow-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div class="arrow arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        <div class="progress-sub-container">
            <div class="progress-sub-background">
                <div class="progress-sub-foreground"></div>
            </div>
        </div>
        <div class="slide-numbers" id="slide-numbers"></div>
    </div>
</template>




<!-- <script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

interface CardData {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
}

const data: CardData[] = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat...",
    image: 'https://cdn.pixabay.com/photo/2023/10/27/09/24/mountains-8344601_1280.jpg'
  },
  {
    place: 'Japan Alps',
    title: 'NANGANO',
    title2: 'PREFECTURE',
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove...",
    image: 'https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg'
  },
  // Add additional cards here...
];

const order = ref([0, 1, 2, 3, 4, 5]);
const detailsEven = ref(true);
const offsetTop = 200;
const offsetLeft = 700;
const cardWidth = 200;
const cardHeight = 300;
const gap = 40;
const numberSize = 50;
const ease = 'sine.inOut';
let clicks = 0;

function getElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function animate(target: string, duration: number, properties: any) {
  return new Promise<void>((resolve) => {
    gsap.to(target, {
      ...properties,
      duration,
      onComplete: resolve,
    });
  });
}

function loadImage(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  await Promise.all(data.map(({ image }) => loadImage(image)));
}

function step() {
  return new Promise<void>((resolve) => {
    order.value.push(order.value.shift()!);
    detailsEven.value = !detailsEven.value;

    const [active, ...rest] = order.value;
    const prv = rest[rest.length - 1];

    gsap.set(`#card${prv}`, { zIndex: 10 });
    gsap.set(`#card${active}`, { zIndex: 20 });
    gsap.to(`#card${prv}`, { scale: 1.5, ease });

    clicks -= 1;
    if (clicks > 0) step();
  });
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error('One or more images failed to load', error);
  }
}

function handlePagination(event: Event) {
  if ((event.currentTarget as HTMLElement).classList.contains('arrow-left')) {
    clicks += 1;
    step();
  } else if ((event.currentTarget as HTMLElement).classList.contains('arrow-right')) {
    clicks += 1;
    step();
  }
}

function init() {
  gsap.to('.cover', {
    x: window.innerWidth + 400,
    delay: 0.5,
    ease,
    onComplete: () => setTimeout(loop, 500)
  });
}

function loop() {
  animate('.indicator', 2, { x: 0 })
    .then(() => animate('.indicator', 0.8, { x: window.innerWidth, delay: 0.3 }))
    .then(() => gsap.set('.indicator', { x: -window.innerWidth }))
    .then(step)
    .then(loop);
}

onMounted(() => {
  start();
});

</script>


<style scoped>
/* Styles for card layout, pagination, etc. */
.card {
  /* Styling for the card */
}
</style>


<style scoped>
@import url("public/style.css");
</style> -->