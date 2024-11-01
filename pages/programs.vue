<!-- pages/programs.vue -->
<template>
  <div class="programs-page">
    <main>
      <!-- Hero Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-custom-maroon mb-6">Our Programs</h1>
          <p class="text-xl text-gray-600 max-w-3xl">
            Discover our comprehensive range of pre-university programs designed to prepare you for success in higher education and beyond.
          </p>
        </div>
      </section>

      <!-- Programs Grid -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="program in programs" :key="program.id" class="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
              <div class="aspect-video">
                <img :src="program.image" :alt="program.name" class="w-full h-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-semibold text-custom-maroon mb-4">{{ program.name }}</h3>
                <p class="text-gray-600 mb-4">{{ program.description }}</p>
                <h4 class="font-semibold text-lg mb-2">Key Subjects:</h4>
                <ul class="list-disc list-inside text-gray-600 mb-6">
                  <li v-for="subject in program.subjects" :key="subject" class="mb-1">
                    {{ subject }}
                  </li>
                </ul>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-semibold text-gray-500">Duration: {{ program.duration }}</span>
                  <button class="bg-custom-maroon text-white px-6 py-2 rounded-full hover:bg-custom-maroon-dark transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Our Programs -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-custom-maroon mb-12 text-center">Why Choose Our Programs?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="feature in features" :key="feature.id" class="bg-white p-6 rounded-lg border border-gray-100">
              <div class="w-12 h-12 bg-custom-maroon rounded-full flex items-center justify-center mb-4">
                <component :is="feature.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="bg-gray-50 border border-custom-maroon rounded-lg p-8 text-center">
            <h2 class="text-3xl font-bold mb-4 text-custom-maroon">Ready to Begin Your Journey?</h2>
            <p class="text-lg mb-8 text-gray-600">Take the first step towards your future success. Apply now for our programs.</p>
            <button class="bg-custom-maroon text-white px-8 py-3 rounded-full font-semibold hover:bg-custom-maroon-dark transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { AcademicCapIcon, UserGroupIcon, ChartBarIcon, BookOpenIcon, BeakerIcon, CalculatorIcon } from '@heroicons/vue/24/outline'

const programs = [
  {
    id: 1,
    name: 'Science (PCMB)',
    description: 'A comprehensive program focusing on Physics, Chemistry, Mathematics, and Biology for aspiring medical and engineering professionals.',
    image: '/lab.jpg',
    subjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology'
    ],
    duration: '2 Years'
  },
  {
    id: 2,
    name: 'Science (PCMC)',
    description: 'Specialized program combining Physics, Chemistry, Mathematics, and Computer Science for future tech innovators.',
    image: '/lab2.jpg',
    subjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Computer Science'
    ],
    duration: '2 Years'
  },
  {
    id: 3,
    name: 'Commerce',
    description: 'Comprehensive business-focused program preparing students for careers in finance, accounting, and business management.',
    image: '/class2.jpg',
    subjects: [
      'Accountancy',
      'Business Studies',
      'Economics',
      'Mathematics/Statistics'
    ],
    duration: '2 Years'
  }
]

const features = [
  {
    id: 1,
    icon: AcademicCapIcon,
    title: 'Expert Faculty',
    description: 'Learn from experienced educators with extensive subject knowledge and teaching expertise.'
  },
  {
    id: 2,
    icon: BeakerIcon,
    title: 'Modern Laboratories',
    description: 'Access state-of-the-art labs equipped with the latest equipment for practical learning.'
  },
  {
    id: 3,
    icon: UserGroupIcon,
    title: 'Small Class Sizes',
    description: 'Enjoy personalized attention with our optimal student-to-teacher ratio.'
  },
  {
    id: 4,
    icon: ChartBarIcon,
    title: 'Career Guidance',
    description: 'Receive expert guidance for higher education and career planning.'
  },
  {
    id: 5,
    icon: BookOpenIcon,
    title: 'Comprehensive Resources',
    description: 'Access our extensive library and digital learning materials.'
  },
  {
    id: 6,
    icon: CalculatorIcon,
    title: 'Regular Assessments',
    description: 'Benefit from continuous evaluation and feedback for improvement.'
  }
]
</script>