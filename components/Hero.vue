<!-- components/Hero.vue -->
<template>
    <section class="hero relative h-[500px] bg-cover bg-center" :style="{   backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'center bottom' }">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Welcome to Bendre PU College</h2>
          <p class="text-xl mb-8">Empowering minds, shaping futures</p>
          <NuxtLink to="/admissions" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
            Apply Now
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const heroImage = '/bendre.jpg' // Replace with your actual hero image
  </script>