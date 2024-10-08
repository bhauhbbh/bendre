<!-- components/Facilities.vue -->
<template>
    <section class="facilities bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-custom-maroon">Our Facilities</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="facility in facilities" :key="facility.id" class=" overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="facility.image" :alt="facility.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2 text-custom-maroon">{{ facility.title }}</h3>
              <p class="text-gray-600">{{ facility.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const facilities = [
    {
      id: 1,
      title: 'Modern Library',
      description: 'A vast collection of books and digital resources for extensive research and study.',
      image: '/library.jpg'
    },
    {
      id: 2,
      title: 'Tech-Enabled Classrooms',
      description: 'Smart classrooms equipped with the latest technology for interactive learning experiences.',
      image: '/lab.jpg'
    },
    {
      id: 3,
      title: 'Comfortable Hostel',
      description: 'Well-furnished hostel rooms providing a home away from home for our students.',
      image: '/building.jpg'
    },
    {
      id: 4,
      title: 'State-of-the-Art Laboratories',
      description: 'Cutting-edge labs for hands-on experiments and practical learning.',
      image: '/lab2.jpg'
    },
    {
      id: 5,
      title: 'Sports Complex',
      description: 'Modern sports facilities to encourage physical fitness and team spirit.',
      image: '/sport.jpg'
    },
    {
      id: 6,
      title: 'Cafeteria',
      description: 'A spacious cafeteria serving nutritious and delicious meals throughout the day.',
      image: '/class2.jpg'
    }
  ]
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>