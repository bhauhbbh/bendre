<!-- components/Header.vue -->
<template>
  <header class="shadow-md relative">
    <!-- Top row -->
    <div class="bg-custom-maroon text-white">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Bendre PU College</h1>
        <div class="hidden md:flex items-center space-x-6">
          <a href="tel:+918888888888" class="text-xl hover:underline">
            <span class="mr-2">📞</span>+91 8888888888
          </a>
          <a href="mailto:info@bendrepucollege.edu" class="text-xl hover:underline">
            <span class="mr-2">✉️</span>info@bendrepucollege.edu
          </a>
        </div>
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

    <!-- Mobile contact row -->
    <div class="md:hidden bg-gray-100 py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="tel:+918888888888" class="text-md text-custom-maroon hover:underline">
          <span class="mr-2">📞</span>+91 8888888888
        </a>
        <a href="mailto:info@bendrepucollege.edu" class="text-md text-custom-maroon hover:underline">
          <span class="mr-2">✉️</span>info@bendrepucollege.com
        </a>
      </div>
    </div>
    
    <!-- Big Menu (hidden on mobile) -->
    <div class="hidden md:block">
      <BigMenu />
    </div>

    <!-- Mobile menu backdrop -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMobileMenu"></div>

    <!-- Mobile menu (hidden on larger screens) -->
    <Transition name="slide-fade">
      <MobileMenu v-if="isMobileMenuOpen" @close-menu="closeMobileMenu" class="fixed top-0 right-0 h-full w-64 bg-white z-50" />
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BigMenu from './BigMenu.vue'
import MobileMenu from './MobileMenu.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>