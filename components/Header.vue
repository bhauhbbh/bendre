<!-- components/Header.vue -->
<template>
  <header class="shadow-md relative z-40">
    <!-- Top row -->
    <div class="bg-custom-maroon text-white">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold hover:opacity-90 transition-opacity">
          Bendre PU College
        </NuxtLink>
        
        <!-- Desktop Contact Info -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="tel:+918888888888" class="text-xl hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 9902501108
          </a>
          <a href="mailto:info@bendrepucollege.edu" class="text-xl hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@bendrepucollege.com
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!isMobileMenuOpen" 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg 
            v-else 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Contact Info -->
    <div class="md:hidden bg-gray-100 py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="tel:+918888888888" 
          class="text-sm text-custom-maroon hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +91 8888888888
        </a>
        <a 
          href="mailto:info@bendrepucollege.edu" 
          class="text-sm text-custom-maroon hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@bendrepucollege.edu
        </a>
      </div>
    </div>
    
    <!-- Desktop Navigation Menu -->
    <div class="hidden md:block">
      <BigMenu />
    </div>

    <!-- Mobile Menu (Teleported to body) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <MobileMenu
          v-if="isMobileMenuOpen"
          @close-menu="closeMobileMenu"
        />
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BigMenu from './BigMenu.vue'
import MobileMenu from './MobileMenu.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  updateBodyScroll()
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  updateBodyScroll()
}

const updateBodyScroll = () => {
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Handle escape key to close menu
const handleEscape = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Clean up event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscape)
  // Ensure body scroll is restored when component is unmounted
  document.body.style.overflow = ''
})
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Ensure smooth transitions for menu button */
button svg {
  transition: transform 0.2s ease-in-out;
}

/* Improve touch targets on mobile */
@media (max-width: 768px) {
  a, button {
    padding: 0.5rem;
    margin: -0.5rem;
  }
}
</style>