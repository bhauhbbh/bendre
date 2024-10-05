// store/news.js
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: 1,
        title: 'New Science Lab Inauguration',
        excerpt: 'State-of-the-art science lab opens its doors to students.',
        image: '/image.png',
        path: '/news/new-science-lab',
      },
      {
        id: 2,
        title: 'Annual Sports Meet',
        excerpt: 'Join us for the exciting annual sports meet next month.',
        image: '/image.png',
        path: '/news/annual-sports-meet',
      },
      {
        id: 3,
        title: 'Cultural Fest 2024',
        excerpt: 'Get ready for the biggest cultural event of the year.',
        image: '/image.png',
        path: '/news/cultural-fest-2024',
      },
    ],
  }),
  getters: {
    getLatestNews: (state) => state.news.slice(0, 3),
  },
})