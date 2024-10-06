<!-- components/BigMenu.vue -->
<template>
  <nav class="relative bg-white border-b-2 border-gray-200 text-gray-900 font-nunito hidden md:block">
    <div class="container mx-auto">
      <ul class="flex justify-center">
        <li v-for="item in topLevelItems" :key="item.name" class="hoverable group">
          <a href="#" class="relative block py-6 px-4 lg:p-6 text-lg lg:text-base font-semibold hover:bg-gray-100 flex items-center">
            {{ item.name }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
          <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
            <div class="container mx-auto">
              <div class="flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl">
                  <div v-for="(column, index) in item.submenu" :key="index" class="px-4">
                    <h3 class="font-bold text-lg mb-3 text-black uppercase">{{ column.heading }}</h3>
                    <ul class="text-left">
                      <li v-for="subItem in column.items" :key="subItem.name" class="mb-2">
                        <a :href="subItem.path" class="text-custom-maroon hover:underline text-lg font-normal">{{ subItem.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { topLevelItems } from './menuData.js';
</script>

<style scoped>
nav {
  position: relative;
  z-index: 1000;
}

.mega-menu {
  left: 0;
  position: absolute;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.hoverable {
  position: static;
}

.hoverable:hover .mega-menu {
  opacity: 1;
  visibility: visible;
}
</style>