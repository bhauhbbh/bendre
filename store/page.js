import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    pageData: {
      academics: {
        title: 'Academic Programs',
        programs: [
          { id: 1, name: 'Science', description: '...', image: '/science.jpg' },
          { id: 2, name: 'Commerce', description: '...', image: '/commerce.jpg' },
          { id: 3, name: 'Arts', description: '...', image: '/arts.jpg' },
        ],
      },
      'student-life': {
        title: 'Student Life at Bendre PU College',
        heroImage: '/student-life-hero.jpg',
        heroText: 'Experience a vibrant and enriching campus life',
        activities: [
          { id: 1, name: 'Sports', description: '...' },
          { id: 2, name: 'Cultural Events', description: '...' },
          { id: 3, name: 'Clubs and Societies', description: '...' },
        ],
      },
      admissions: {
        title: 'Admissions',
        admissionSteps: [
          { id: 1, description: 'Submit online application' },
          { id: 2, description: 'Attend entrance exam' },
          { id: 3, description: 'Interview process' },
          { id: 4, description: 'Results and enrollment' },
        ],
        ctaTitle: 'Ready to Apply?',
        ctaDescription: 'Start your journey with Bendre PU College today!',
        ctaButtonText: 'Apply Now',
      },
    },
  }),
  actions: {
    async getPageData(slug) {
      // Simulate API call or database fetch
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.pageData[slug])
        }, 100)
      })
    },
  },
})