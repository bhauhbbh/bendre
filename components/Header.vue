<!-- components/Header.vue -->
<template>
  <header class="shadow-md">
    <!-- Top row -->
    <div class="bg-custom-maroon text-white">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Bendre PU College</h1>
        <button @click="toggleMobileMenu" class="md:hidden text-white">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Big Menu -->
    <BigMenu />

    <!-- Mobile menu (hidden on larger screens) -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-b border-gray-200">
      <!-- Add mobile menu content here -->
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BigMenu from './BigMenu.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Add any additional styles here */
</style>