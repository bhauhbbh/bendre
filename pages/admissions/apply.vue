<!-- pages/admissions/apply.vue -->
<template>
    <div class="how-to-apply">
      <!-- Hero Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-custom-maroon mb-6">How to Apply</h1>
          <p class="text-xl text-gray-600 max-w-3xl">
            Begin your journey at Bendre PU College with our simple admission process.
          </p>
        </div>
      </section>
  
      <!-- Quick Navigation -->
      <section class="border-b">
        <div class="container mx-auto px-4 py-4">
          <nav class="flex space-x-6 text-gray-600">
            <a href="#process" class="hover:text-custom-maroon">Application Process</a>
            <a href="#requirements" class="hover:text-custom-maroon">Requirements</a>
            <a href="#timeline" class="hover:text-custom-maroon">Timeline</a>
            <a href="#contact" class="hover:text-custom-maroon">Contact</a>
          </nav>
        </div>
      </section>
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <!-- Application Process -->
          <section id="process" class="mb-16">
            <h2 class="text-3xl font-bold text-custom-maroon mb-6">Application Process</h2>
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <div class="grid gap-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-custom-maroon rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-semibold mb-2">Visit the College</h3>
                    <p class="text-gray-600">
                      Visit our campus during working hours (Monday to Saturday, 9:30 AM to 4:30 PM) to collect the application form and prospectus.
                    </p>
                  </div>
                </div>
  
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-custom-maroon rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-semibold mb-2">Submit Documents</h3>
                    <p class="text-gray-600">
                      Submit the completed application form along with all required documents at the admission counter.
                    </p>
                  </div>
                </div>
  
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-custom-maroon rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-semibold mb-2">Document Verification</h3>
                    <p class="text-gray-600">
                      Our admission team will verify your documents and eligibility.
                    </p>
                  </div>
                </div>
  
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 bg-custom-maroon rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-semibold mb-2">Admission Confirmation</h3>
                    <p class="text-gray-600">
                      Upon successful verification, complete the admission process by paying the required fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Requirements Section -->
          <section id="requirements" class="mb-16">
            <h2 class="text-3xl font-bold text-custom-maroon mb-6">Requirements</h2>
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-4">Required Documents</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Original Transfer Certificate (TC) from previous school
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  SSLC/10th Marks Card (Original and 2 photocopies)
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Character Certificate from previous institution
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Recent passport size photographs (4 copies)
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Aadhar Card copy
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Caste Certificate (if applicable)
                </li>
              </ul>
  
              <h3 class="text-xl font-semibold mt-8 mb-4">Eligibility Criteria</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Minimum 60% aggregate in SSLC/10th standard
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                  Pass in all subjects in SSLC/10th standard
                </li>
              </ul>
            </div>
          </section>
  
          <!-- Timeline Section -->
          <section id="timeline" class="mb-16">
            <h2 class="text-3xl font-bold text-custom-maroon mb-6">Admission Timeline</h2>
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Application Start Date</span>
                  <span class="text-gray-600">April 1, 2024</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Last Date for Application</span>
                  <span class="text-gray-600">June 30, 2024</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Classes Begin</span>
                  <span class="text-gray-600">July 1, 2024</span>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Contact Section -->
          <section id="contact" class="mb-16">
            <h2 class="text-3xl font-bold text-custom-maroon mb-6">Contact Admission Office</h2>
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <div class="space-y-4">
                <div class="flex items-center">
                  <PhoneIcon class="w-5 h-5 text-custom-maroon mr-3" />
                  <span>+91 8888888888</span>
                </div>
                <div class="flex items-center">
                  <EnvelopeIcon class="w-5 h-5 text-custom-maroon mr-3" />
                  <span>admissions@bendrepucollege.edu</span>
                </div>
                <div class="flex items-center">
                  <ClockIcon class="w-5 h-5 text-custom-maroon mr-3" />
                  <span>Monday to Saturday: 9:30 AM - 4:30 PM</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline'
  </script>
  
  <style scoped>
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Active link styles */
  .router-link-active {
    color: #38bdf8;
  }
  
  /* Hover effects */
  .hover\:text-custom-maroon:hover {
    color: #38bdf8;
    transition: color 0.3s ease;
  }
  </style>