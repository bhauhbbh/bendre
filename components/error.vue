<!-- error.vue (in root directory) -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-custom-maroon mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-custom-maroon hover:bg-custom-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-maroon"
        >
          Return Home
        </NuxtLink>
      </div>
    </div>
  </template>