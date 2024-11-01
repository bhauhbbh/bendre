<!-- components/Hero.vue -->
<template>
  <Carousel :slides="slides" :autoplayInterval="5000" />
</template>

<script setup>
import Carousel from './Carousel.vue'

const slides = [
  {
    title: "Empowering Minds",
    description: "Join a community dedicated to academic excellence and personal growth",
    image: "/bendre.jpg",
    ctaText: "Apply Now",
    ctaLink: "/admissions"
  },
  {
    title: "Discover Your Potential",
    description: "Explore diverse programs and state-of-the-art facilities",
    image: "/lab.jpg",
    ctaText: "Our Programs",
    ctaLink: "/academics"
  },
  {
    title: "Shape Your Future",
    description: "Prepare for success with our innovative curriculum and expert faculty",
    image: "/class2.jpg",
    ctaText: "Learn More",
    ctaLink: "/about-us"
  }
]
</script>