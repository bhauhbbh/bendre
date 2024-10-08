<template>
    <div class="academics-page">
      <h1>{{ title }}</h1>
      <div class="programs-grid">
        <div v-for="program in programs" :key="program.id" class="program-card">
          <img :src="program.image" :alt="program.name" />
          <h2>{{ program.name }}</h2>
          <p>{{ program.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    programs: Array,
  })
  </script>
  
  <style scoped>
  .academics-page {
    /* Academic page specific styles */
  }
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  .program-card {
    /* Program card styles */
  }
  </style>