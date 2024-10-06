<!-- pages/index.vue -->
<template>
  <div class="college-homepage">
    <Header />
    <Hero />
    <MissionVision />
    <PrincipalNotes />
    <QuickLinks />
    <NewsSection />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import MissionVision from '~/components/MissionVision.vue'
import PrincipalNotes from '~/components/PrincipalNotes.vue'
import QuickLinks from '~/components/QuickLinks.vue'
import NewsSection from '~/components/NewsSection.vue'
</script>

<style scoped>
.college-homepage {
  font-family: 'Nunito Sans', sans-serif;
}
</style>