<!-- pages/about.vue -->
<template>
    <div class="about-page">
      <!-- Hero Section -->
      <section class="relative h-96 bg-gray-900">
        <img src="/bendre_.jpg" alt="College Campus" class="absolute inset-0 w-full h-full object-cover opacity-50">
        <div class="relative container mx-auto px-4 h-full flex items-center">
          <div class="text-white">
            <h1 class="text-5xl font-bold mb-4">About Bendre PU College</h1>
            <p class="text-xl max-w-2xl">Empowering minds and shaping futures since 1980. A legacy of excellence in education.</p>
          </div>
        </div>
      </section>
  
      <!-- Quick Stats -->
      <section class="bg-custom-maroon text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">1980</div>
              <div class="text-lg">Established</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">5000+</div>
              <div class="text-lg">Students</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">100+</div>
              <div class="text-lg">Faculty Members</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">98%</div>
              <div class="text-lg">Pass Rate</div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Vision & Mission -->
      <section id="vision-mission" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-custom-maroon mb-6">Our Vision</h2>
              <p class="text-gray-700 leading-relaxed">
                To be a leading institution that nurtures intellectual curiosity, fosters academic excellence, and develops well-rounded individuals prepared to make meaningful contributions to society.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-custom-maroon mb-6">Our Mission</h2>
              <p class="text-gray-700 leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values. We strive to create an inclusive learning environment that promotes critical thinking, creativity, and character development.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- History -->
      <section id="history" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-custom-maroon mb-8 text-center">Our History</h2>
          <div class="max-w-4xl mx-auto">
            <div class="prose prose-lg">
              <p>
                Established in 1980, Bendre PU College was founded with a vision to provide quality education to students in the region. Named after the renowned Kannada poet D.R. Bendre, our institution has grown from humble beginnings to become one of the most respected educational institutions in the area.
              </p>
              <p>
                Over the decades, we have continuously evolved our academic programs, infrastructure, and teaching methodologies to meet the changing needs of our students while maintaining our commitment to academic excellence and moral values.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Leadership -->
      <section id="leadership" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-custom-maroon mb-12 text-center">Our Leadership</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <img src="/sharath.webp" alt="Chairman" class="w-48 h-48 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold mb-2">Dr. Rajesh Kumar</h3>
              <p class="text-gray-600 mb-2">Chairman</p>
              <p class="text-sm text-gray-500">Leading our institution with over 25 years of experience in education.</p>
            </div>
            <div class="text-center">
              <img src="/sharath.webp" alt="Principal" class="w-48 h-48 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold mb-2">Sharath Kumar KN</h3>
              <p class="text-gray-600 mb-2">Principal</p>
              <p class="text-sm text-gray-500">Guiding our academic excellence with innovative educational approaches.</p>
            </div>
            <div class="text-center">
              <img src="/sharath.webp" alt="Vice Principal" class="w-48 h-48 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold mb-2">Dr. Meena Sharma</h3>
              <p class="text-gray-600 mb-2">Vice Principal</p>
              <p class="text-sm text-gray-500">Overseeing student development and academic programs.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Management Team -->
      <section id="management" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-custom-maroon mb-12 text-center">Management Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="member in managementTeam" :key="member.name" class="text-center">
              <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-lg font-bold mb-1">{{ member.name }}</h3>
              <p class="text-gray-600 text-sm">{{ member.position }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Core Values -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-custom-maroon mb-12 text-center">Our Core Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-custom-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold mb-2">Excellence</h3>
              <p class="text-gray-600">Striving for the highest standards in everything we do.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-custom-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold mb-2">Integrity</h3>
              <p class="text-gray-600">Maintaining high ethical standards and moral values.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-custom-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold mb-2">Innovation</h3>
              <p class="text-gray-600">Embracing new ideas and approaches to learning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { AcademicCapIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
  
  const managementTeam = [
    {
      name: 'Dr. Anand Kumar',
      position: 'Director of Academics',
      image: '/sharath.webp'
    },
    {
      name: 'Mrs. Priya Singh',
      position: 'Head of Administration',
      image: '/sharath.webp'
    },
    {
      name: 'Mr. Ravi Shankar',
      position: 'Financial Controller',
      image: '/sharath.webp'
    },
    {
      name: 'Dr. Suma Rao',
      position: 'Student Welfare Officer',
      image: '/sharath.webp'
    }
  ]
  </script>