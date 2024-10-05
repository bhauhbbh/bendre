<!-- components/NewsSection.vue -->
<template>
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Latest News and Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in newsItems" :key="item.id" class="bg-gray-100 rounded-lg overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ item.excerpt }}</p>
              <NuxtLink :to="item.path" class="text-blue-600 hover:underline text-sm">Read More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useNewsStore } from '~/store/index'
  
  const newsStore = useNewsStore()
  const newsItems = newsStore.getLatestNews
  </script>