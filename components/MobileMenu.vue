<!-- components/MobileMenu.vue -->
<template>
  <div class="fixed inset-0 z-50" @click="$emit('close-menu')">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <nav class="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl" @click.stop>
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 class="text-xl font-bold text-custom-maroon">Menu</h2>
        <button @click="$emit('close-menu')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="overflow-y-auto h-[calc(100vh-64px)]">
        <ul class="py-2">
          <li v-for="item in topLevelItems" :key="item.label" class="border-b border-gray-200 last:border-b-0">
            <div
              @click="toggleSubmenu(item.label)"
              class="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50"
            >
              <span class="text-lg font-semibold">{{ item.label }}</span>
              <svg
                class="w-4 h-4 ml-1 transform transition-transform duration-200"
                :class="{ 'rotate-180': openSubmenus.includes(item.label) }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[1000px]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[1000px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="openSubmenus.includes(item.label)" class="bg-gray-50 overflow-hidden">
                <div v-for="(column, index) in item.submenu" :key="index" class="px-6 py-3">
                  <h3 class="font-bold text-sm mb-2 text-gray-600 uppercase">{{ column.heading }}</h3>
                  <ul class="space-y-2">
                    <li v-for="subItem in column.items" :key="subItem.label">
                      <NuxtLink
                        :to="subItem.path"
                        class="text-custom-maroon hover:underline text-base block py-1"
                        @click="$emit('close-menu')"
                      >
                        {{ subItem.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { topLevelItems } from './menuData.js'

const openSubmenus = ref([])

const toggleSubmenu = (label) => {
  const index = openSubmenus.value.indexOf(label)
  if (index === -1) {
    openSubmenus.value.push(label)
  } else {
    openSubmenus.value.splice(index, 1)
  }
}

defineEmits(['close-menu'])
</script>

<style scoped>
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}
</style>