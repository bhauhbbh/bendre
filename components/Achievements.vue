<!-- components/Achievements.vue -->
<template>
    <section class="achievements bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-custom-maroon">The Glimpes</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="achievement in achievements" :key="achievement.id" class="bg-gray-100  overflow-hidden transition-transform duration-300 hover:scale-105">
            <div class="relative h-64">
              <img :src="achievement.image" :alt="achievement.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p class="text-white text-center px-4">{{ achievement.description }}</p>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-custom-maroon text-center">{{ achievement.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const achievements = [
    {
      id: 1,
      title: 'Toppers of the year 2019',
      description: 'Toppers of the year 2019',
      image: '/paper1.jpg'
    },
    {
      id: 2,
      title: 'Toppers of the years 2019',
      description: 'Toppers of the years 2019',
      image: '/paper2.jpg'
    },
    {
      id: 3,
      title: 'Our Guests',
      description: 'Our Guests',
      image: '/guest.jpg'
    },
    {
      id: 4,
      title: 'Our events',
      description: 'Our events',
      image: '/show.jpg'
    }
  ]
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>