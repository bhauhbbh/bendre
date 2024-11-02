<template>
  <div>
    <template v-if="page">
      <component :is="pageComponent" :pageData="page" />
    </template>
    <template v-else>
      <NuxtErrorBoundary>
        <template #error>
          <Error />
        </template>
      </NuxtErrorBoundary>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePageStore } from '~/store/page'
import DynamicPage from '~/components/DynamicPage.vue'
import HostelPage from '~/components/HostelPage.vue'
import Error from '~/error.vue'

// Define unique page meta
definePageMeta({
  name: 'catch-all-slug-page'
})

const route = useRoute()
const pageStore = usePageStore()

const slug = computed(() => {
  const fullPath = route.path.substring(1)
  return fullPath || 'index'
})

const page = ref(null)

const pageComponent = computed(() => {
  switch (slug.value) {
    case 'hostel':
      return HostelPage
    default:
      return DynamicPage
  }
})

onMounted(async () => {
  try {
    page.value = await pageStore.getPageData(slug.value)
  } catch (error) {
    page.value = null
  }
})
</script>