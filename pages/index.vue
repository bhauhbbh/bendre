<!-- pages/index.vue -->
<template>
  <div class="college-homepage">
    <Header />
    <Hero />
    <QuickLinks />
    <NewsSection />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import QuickLinks from '~/components/QuickLinks.vue'
import NewsSection from '~/components/NewsSection.vue'
</script>

<style scoped>
.college-homepage {
  font-family: Arial, sans-serif;
}
</style>