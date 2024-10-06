<!-- components/MobileMenu.vue -->
<template>
    <nav class="bg-white h-full overflow-y-auto">
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 class="text-xl font-bold text-custom-maroon">Menu</h2>
        <button @click="$emit('close-menu')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul class="py-2">
        <li v-for="item in topLevelItems" :key="item.name" class="border-b border-gray-200 last:border-b-0">
          <div @click="toggleSubmenu(item)" class="flex justify-between items-center px-4 py-2 cursor-pointer">
            <span class="text-lg font-semibold">{{ item.name }}</span>
            <svg class="w-4 h-4 ml-1 transform transition-transform" :class="{ 'rotate-180': openSubmenus.includes(item.name) }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div v-show="openSubmenus.includes(item.name)" class="bg-gray-100">
            <div v-for="(column, index) in item.submenu" :key="index" class="px-6 py-2">
              <h3 class="font-bold text-sm mb-2 text-gray-600 uppercase">{{ column.heading }}</h3>
              <ul>
                <li v-for="subItem in column.items" :key="subItem.name" class="mb-2">
                  <a :href="subItem.path" class="text-custom-maroon hover:underline text-base font-normal">{{ subItem.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { topLevelItems } from './menuData.js'

const openSubmenus = ref([])

const toggleSubmenu = (item) => {
  const index = openSubmenus.value.indexOf(item.name)
  if (index === -1) {
    openSubmenus.value.push(item.name)
  } else {
    openSubmenus.value.splice(index, 1)
  }
}

defineEmits(['close-menu'])
</script>