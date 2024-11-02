<!-- pages/calendar.vue -->
<template>
    <div class="academic-calendar">
      <!-- Hero Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-custom-maroon mb-6">Academic Calendar 2024-25</h1>
          <p class="text-xl text-gray-600 max-w-3xl">
            Stay informed about important academic dates, events, and activities throughout the year.
          </p>
        </div>
      </section>
  
      <!-- Calendar Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <!-- Class Controls -->
          <div class="flex justify-center mb-8">
            <button 
              v-for="year in ['PUC 1', 'PUC 2']" 
              :key="year"
              @click="currentYear = year"
              :class="[
                'px-6 py-2 font-semibold rounded-full mx-2',
                currentYear === year 
                  ? 'bg-custom-maroon text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ year }}
            </button>
          </div>
  
          <!-- Calendar Table -->
          <div class="bg-white rounded-lg border border-gray-200">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-custom-maroon text-white">
                    <th class="py-4 px-6 text-left">Month</th>
                    <th class="py-4 px-6 text-left">Date</th>
                    <th class="py-4 px-6 text-left">Event</th>
                    <th class="py-4 px-6 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in filteredEvents" 
                      :key="event.id"
                      class="border-b border-gray-200 hover:bg-gray-50">
                    <td class="py-4 px-6 font-semibold text-custom-maroon">{{ event.month }}</td>
                    <td class="py-4 px-6">{{ event.date }}</td>
                    <td class="py-4 px-6 font-medium">{{ event.event }}</td>
                    <td class="py-4 px-6 text-gray-600">{{ event.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          <!-- Calendar Legend -->
          <div class="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-custom-maroon mb-4">Important Notes:</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                Holidays and Vacations
              </li>
              <li class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                Examinations
              </li>
              <li class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                Special Events
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const currentYear = ref('PUC 1')
  
  const academicEvents = [
    // PUC 1
    {
      id: 1,
      year: 'PUC 1',
      month: 'June',
      date: 'June 1-5, 2024',
      event: 'College Reopening',
      description: 'Commencement of academic year for PUC 1'
    },
    {
      id: 2,
      year: 'PUC 1',
      month: 'June',
      date: 'June 15, 2024',
      event: 'Orientation Program',
      description: 'New student orientation and campus familiarization'
    },
    {
      id: 3,
      year: 'PUC 1',
      month: 'July',
      date: 'July 10-15, 2024',
      event: 'First Unit Test',
      description: 'First internal assessment for all subjects'
    },
    {
      id: 4,
      year: 'PUC 1',
      month: 'August',
      date: 'August 15, 2024',
      event: 'Independence Day',
      description: 'National holiday and cultural celebrations'
    },
    {
      id: 5,
      year: 'PUC 1',
      month: 'September',
      date: 'Sept 20-30, 2024',
      event: 'Mid-Term Examinations',
      description: 'Midterm assessments'
    },
    // PUC 2
    {
      id: 6,
      year: 'PUC 2',
      month: 'June',
      date: 'June 5, 2024',
      event: 'Classes Begin',
      description: 'Commencement of PUC 2 academic year'
    },
    {
      id: 7,
      year: 'PUC 2',
      month: 'July',
      date: 'July 15-20, 2024',
      event: 'First Preparatory Exams',
      description: 'First phase of board exam preparation'
    },
    {
      id: 8,
      year: 'PUC 2',
      month: 'September',
      date: 'Sept 1-10, 2024',
      event: 'Second Preparatory Exams',
      description: 'Second phase of board exam preparation'
    },
    {
      id: 9,
      year: 'PUC 2',
      month: 'December',
      date: 'Dec 1-15, 2024',
      event: 'Final Preparatory Exams',
      description: 'Final phase of board exam preparation'
    },
    {
      id: 10,
      year: 'PUC 2',
      month: 'March',
      date: 'March 1-20, 2025',
      event: 'Board Examinations',
      description: 'Final PUC Board Examinations'
    }
  ]
  
  const filteredEvents = computed(() => {
    return academicEvents.filter(event => event.year === currentYear.value)
  })
  </script>
  
  <style scoped>
  .academic-calendar {
    background-color: #f8fafc;
  }
  
  /* Ensure smooth transitions for interactive elements */
  button {
    transition: all 0.3s ease;
  }
  
  /* Custom scrollbar for table overflow */
  .overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: #38bdf8 #f1f5f9;
  }
  
  .overflow-x-auto::-webkit-scrollbar {
    height: 8px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #38bdf8;
    border-radius: 20px;
  }
  </style>