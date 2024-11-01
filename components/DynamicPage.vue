<!-- components/DynamicPage.vue -->
<template>
    <div v-if="pageData" class="dynamic-page container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6 text-custom-maroon">{{ pageData.title }}</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-2/3">
          <div v-html="pageData.content" class="prose max-w-none"></div>
        </div>
        <div class="md:w-1/3">
          <img :src="pageData.image" :alt="pageData.title" class="w-full h-auto rounded-lg shadow-lg">
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto px-4 py-8">
      <p>Page not found</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    pageData: {
      type: Object,
      required: true
    }
  })
  </script>