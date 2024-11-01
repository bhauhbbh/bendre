<template>
    <div v-if="pageData" class="hostel-page container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6 text-custom-maroon">{{ pageData.title }}</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-2/3">
          <div v-html="pageData.content" class="prose max-w-none"></div>
        </div>
        <div class="md:w-1/3">
          <img :src="pageData.image" :alt="pageData.title" class="w-full h-auto rounded-lg shadow-lg mb-6">
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Hostel Contact Information</h3>
            <p><strong>Warden:</strong> Mr. John Doe</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> hostel@bendrepucollege.edu</p>
          </div>
        </div>
      </div>
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