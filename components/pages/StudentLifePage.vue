<template>
    <div class="student-life-page">
      <h1>{{ title }}</h1>
      <div class="hero-section" :style="{ backgroundImage: `url(${heroImage})` }">
        <p class="hero-text">{{ heroText }}</p>
      </div>
      <div class="activities-list">
        <div v-for="activity in activities" :key="activity.id" class="activity-item">
          <h2>{{ activity.name }}</h2>
          <p>{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    heroImage: String,
    heroText: String,
    activities: Array,
  })
  </script>
  
  <style scoped>
  .student-life-page {
    /* Student life page specific styles */
  }
  .hero-section {
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-text {
    /* Hero text styles */
  }
  .activities-list {
    /* Activities list styles */
  }
  </style>