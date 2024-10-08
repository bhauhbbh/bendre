<!-- components/CollegeOverview.vue -->
<template>
    <section class="college-overview bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <!-- Top full width block with 40% width vertical image -->
        <div class="bg-white overflow-hidden mb-8">
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-2/5">
              <img src="/bendre_.jpg" alt="Bendre PU College Origin" class="w-full h-auto object-cover" style="max-height: 300px;" />
            </div>
            <div class="lg:w-3/5 p-8 flex flex-col justify-center">
              <h2 class="text-3xl font-bold mb-4 text-custom-maroon">Our Rich Heritage</h2>
              <p class="text-gray-700 leading-relaxed">
                Founded in 1980, Bendre PU College has a storied history of academic excellence and community engagement. Named after the renowned Kannada poet D.R. Bendre, our institution has been a beacon of knowledge and culture in the region for over four decades. We've consistently evolved our curriculum and facilities to meet the changing needs of our students while staying true to our core values of integrity, innovation, and inclusivity.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Bottom two blocks -->
        <div class="flex flex-col md:flex-row justify-between items-stretch">
          <!-- Bottom left block: President's message -->
          <div class="w-full md:w-1/2 bg-white p-8 overflow-hidden mb-8 md:mb-0 md:mr-4">
            <img src="/bendre.jpg" alt="College President" class="w-full h-64 object-cover mb-4" />
            <h3 class="text-3xl font-bold mb-4 text-custom-maroon">President's Message</h3>
            <p class="text-gray-700 leading-relaxed">
              "At Bendre PU College, we are committed to fostering an environment where every student can thrive. Our goal is to provide not just education, but a transformative experience that prepares our students for the challenges and opportunities of the future. We believe in the power of knowledge to change lives and shape society."
            </p>
            <p class="text-lg font-semibold mt-4 text-custom-maroon">Dr. Rajesh Kumar</p>
            <p class="text-base text-gray-600">President, Bendre PU College</p>
          </div>
  
          <!-- Bottom right block: Principal's message -->
          <div class="w-full md:w-1/2 bg-white p-8 overflow-hidden md:ml-4">
            <img src="/bendre.jpg" alt="College Principal" class="w-full h-64 object-cover mb-4" />
            <h3 class="text-3xl font-bold mb-4 text-custom-maroon">Principal's Message</h3>
            <p class="text-gray-700 leading-relaxed">
              "Our vision at Bendre PU College is to nurture not just academic excellence, but also character and creativity. We strive to create an inclusive learning environment that encourages critical thinking, fosters innovation, and prepares students to be responsible global citizens. Join us in this exciting journey of discovery and growth."
            </p>
            <p class="text-lg font-semibold mt-4 text-custom-maroon">Sharath Kumar KN</p>
            <p class="text-base text-gray-600">Principal, Bendre PU College</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  /* No additional styles needed as we're using utility classes */
  </style>