<template>
    <div>
      <Header />
      <component :is="pageComponent" v-bind="pageData" />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { usePageStore } from '~/store/page'
  
  // Import page components
  import AcademicsPage from '~/components/pages/AcademicsPage.vue'
  import StudentLifePage from '~/components/pages/StudentLifePage.vue'
  import AdmissionsPage from '~/components/pages/AdmissionsPage.vue'
  
  const route = useRoute()
  const pageStore = usePageStore()
  
  const slug = computed(() => route.params.slug)
  const pageData = ref(null)
  
  // Map slugs to components
  const pageComponents = {
    academics: AcademicsPage,
    'student-life': StudentLifePage,
    admissions: AdmissionsPage,
  }
  
  // Fetch page data based on slug
  const fetchPageData = async () => {
    pageData.value = await pageStore.getPageData(slug.value)
  }
  
  // Determine which component to render
  const pageComponent = computed(() => pageComponents[slug.value] || null)
  
  // Fetch data when component is created
  fetchPageData()
  </script>