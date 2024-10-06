<!-- components/PrincipalNotes.vue -->
<template>
    <section class="principal-notes py-16 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden border-2 border-custom-maroon">
          <div class="lg:w-1/2">
            <img src="/sharath.webp" alt="Principal Dr. Sharath" class="w-full h-full object-cover object-center" />
          </div>
          <div class="lg:w-1/2 p-6 lg:p-8 bg-white">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-custom-maroon">Principal's Message</h2>
            <blockquote class="text-gray-800 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg italic">
              "At Bendre PU College, we believe in nurturing not just minds, but character. Our goal is to prepare you for a future where you can excel and make a positive impact on society. We are committed to providing a supportive environment where creativity thrives, critical thinking is encouraged, and each student's potential is realized."
            </blockquote>
            <div class="flex items-center">
              <div class="w-16 lg:w-20 h-1 bg-custom-maroon mr-3 lg:mr-4"></div>
              <div>
                <p class="text-lg lg:text-xl font-semibold text-custom-maroon">Sharath Kumar KN</p>
                <p class="text-sm lg:text-base text-gray-600">Principal, Bendre PU College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  .principal-notes {
    position: relative;
    background-color: #f7f7f7;
  }
  
  .principal-notes::before,
  .principal-notes::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23881125' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.7;
    z-index: 0;
  }
  
  .principal-notes::before {
    top: -50px;
    left: -50px;
    transform: rotate(45deg);
  }
  
  .principal-notes::after {
    bottom: -50px;
    right: -50px;
    transform: rotate(225deg);
  }
  
  .principal-notes .container {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 1023px) {
    .principal-notes img {
      max-height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }
  </style>