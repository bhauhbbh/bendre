<!-- components/FeaturedHighlights.vue -->
<template>
    <section class="featured-highlights relative bg-custom-maroon py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-10">
          <NuxtLink
            v-for="(item, index) in highlightItems"
            :key="index"
            :to="item.link"
            class="relative aspect-[4/3] shadow-lg group overflow-hidden"
          >
            <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="absolute inset-x-0 bottom-0 bg-rose-800 p-4">
              <p class="text-xl font-black text-white highlight-text">{{ item.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const highlightItems = [
    {
      title: "Campus Life Gallery",
      description: "Explore the vibrant life at Bendre PU College through our photo gallery",
      image: "/highlight.jpeg",
      link: "/gallery"
    },
    {
      title: "Disability Employment Awareness Month",
      description: "Explore the vibrant life at Bendre PU College through our photo gallery",
      image: "/highlight.jpeg",
      link: "/events/disability-awareness"
    },
    {
      title: "Student Radio Show",
      description: "Explore the vibrant life at Bendre PU College through our photo gallery",
      image: "/highlight.jpeg",
      link: "/student-life/radio-show"
    },
    {
      title: "Student Radio Show",
      description: "Explore the vibrant life at Bendre PU College through our photo gallery",
      image: "/highlight.jpeg",
      link: "/student-life/radio-show"
    }
  ]
  </script>
  
  <style scoped>
  .featured-highlights {
    background-image: url('/highlight.jpeg');
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  }
  
  .featured-highlights::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(136, 17, 37, 0.7);
    z-index: 1;
  }
  
  .featured-highlights .container {
    position: relative;
    z-index: 2;
  }
  
  .highlight-text {
    position: relative;
  }
  
  .highlight-text::after {
    content: '';
    position: absolute;
    padding-left: 2em;
    bottom: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  </style>