<!-- components/QuickLinks.vue -->
<template>
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="link in quickLinks" :key="link.title" class="bg-white p-4 rounded-lg">
            <div class="text-blue-600 mb-4">
              <component :is="link.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ link.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ link.description }}</p>
            <NuxtLink :to="link.path" class="text-blue-600 hover:underline text-sm">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { UserGroupIcon, AcademicCapIcon, CalendarIcon, MapIcon } from '@heroicons/vue/24/outline'
  
  const quickLinks = [
    {
      title: 'Future Students',
      description: 'Discover opportunities for your academic journey at Bendre PU College.',
      icon: UserGroupIcon,
      path: '/admissions',
    },
    {
      title: 'Academic Programs',
      description: 'Explore our diverse range of programs and courses.',
      icon: AcademicCapIcon,
      path: '/academics',
    },
    {
      title: 'Events & Calendar',
      description: 'Stay updated with college events, important dates, and activities.',
      icon: CalendarIcon,
      path: '/events',
    },
    {
      title: 'Campus Tour',
      description: 'Take a virtual tour of our state-of-the-art facilities.',
      icon: MapIcon,
      path: '/campus-tour',
    },
  ]
  </script>