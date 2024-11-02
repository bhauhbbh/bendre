<template>
  <component :is="pageComponent" :pageData="pageData" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePageStore } from '~/store/page'
import DynamicPage from '~/components/DynamicPage.vue'
import HostelPage from '~/components/HostelPage.vue'

// Define unique page meta
definePageMeta({
  name: 'single-slug-page'
})

const route = useRoute()
const pageStore = usePageStore()

const slug = computed(() => route.params.slug)
const pageData = ref(null)

// Determine which component to render
const pageComponent = computed(() => {
  switch (slug.value) {
    case 'hostel':
      return HostelPage
    default:
      return DynamicPage
  }
})

// Fetch page data based on slug
const fetchPageData = async () => {
  pageData.value = await pageStore.getPageData(slug.value)
}

// Fetch data when component is mounted
onMounted(fetchPageData)
</script>