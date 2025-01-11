<script setup lang="ts">
import ImageGallery from './ImageGallery.vue';
import DestinationSection from './DestinationSection.vue';
</script>

<template>
  <div class="flex flex-col px-72 mt-5 w-full max-md:px-5 max-md:max-w-full">
    <article class="text-base leading-5 text-black max-md:max-w-full">
      <p>This summer<span class="font-bold">is anything but cruel for Swifties as Taylor's highly-anticipated tour continues to captivate audiences across Europe.</span></p>
      <p>New insights reveal that searches for stays on Airbnb by Americans during European dates of the tour have surged nearly 70 percent compared to the same period last year.</p>
      <p>More than two thirds of nights booked by Americans self-identify as female over Taylor's tour dates across Europe. What's more is that American guests account for nearly a third of all nights booked in European destinations during her tour.</p>
      <p>Out of the woods and into Europe, Swifties <a href="https://news.airbnb.com/en-uk/airbnb-and-oxford-economics-reveal-the-economic-impact-of-major-uk-events/" class="underline" target="_blank" rel="noopener noreferrer">are leading passion tourism</a>.</p>
      
      <h2 class="text-3xl font-bold mt-8">Trending Taylor Hotspots: Out of the woods and into Europe</h2>
      
      <p class="mt-4">Taylor continues to tour in Europe throughout the summer before returning to North America this fall to close out the tour. <span class="font-bold">Here are some of the highlights for destinations for Taylor's tour dates for all global travelers.</span></p>
      
      <ul class="list-disc pl-6 mt-4">
        <li><span class="font-bold">London, UK: </span>Forget, "So long London." Despite already being a top tourist destination, London has seen a remarkable increase in searches.</li>
        <li><span class="font-bold">Edinburgh, UK: </span>This Scottish capital city saw more than a 500 percent increase in searches when tickets went on sale in July 2023.</li>
        <li><span class="font-bold">Paris, France: </span>Over the May weekend when Taylor was in Paris, bookings by US travelers alone, increased over 60 percent compared to the year prior.</li>
      </ul>
    </article>

    <ImageGallery />

    <div class="flex flex-col mt-14 w-full text-black max-md:mt-10 max-md:max-w-full">
      <section class="flex flex-col w-full max-md:max-w-full">
        <h2 class="text-3xl font-bold tracking-tight leading-none max-md:max-w-full">
          Prozoumejte nabídku MEGA chalupy
        </h2>
        <p class="mt-6 text-sm tracking-tighter leading-5 max-md:max-w-full">
          Prozoumejte nabídku MEGA chalupy, Prozoumejte nabídalupy Prozoualupy
        </p>
      </section>
      <DestinationSection />
      
    </div>
  </div>
</template>