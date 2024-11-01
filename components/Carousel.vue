<!-- components/Carousel.vue -->
<template>
    <div class="relative h-[500px] overflow-hidden">
      <div class="absolute inset-0 flex transition-transform ease-in-out duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <div class="relative h-full bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white max-w-2xl px-4">
                <h2 class="text-4xl font-bold mb-4">{{ slide.title }}</h2>
                <p class="text-xl mb-8">{{ slide.description }}</p>
                <NuxtLink :to="slide.ctaLink" class="bg-custom-maroon hover:bg-custom-maroon-dark text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
                  {{ slide.ctaText }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(_, index) in slides" :key="index" @click="goToSlide(index)" class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition duration-300" :class="{ 'bg-opacity-100': currentIndex === index }"></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    slides: {
      type: Array,
      required: true
    },
    autoplayInterval: {
      type: Number,
      default: 5000
    }
  })
  
  const currentIndex = ref(0)
  let autoplayInterval
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length
  }
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
  }
  
  const goToSlide = (index) => {
    currentIndex.value = index
  }
  
  const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, props.autoplayInterval)
  }
  
  const stopAutoplay = () => {
    clearInterval(autoplayInterval)
  }
  
  onMounted(() => {
    startAutoplay()
  })
  
  onUnmounted(() => {
    stopAutoplay()
  })
  </script>