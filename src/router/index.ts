import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/upload-article',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/resources/:slug',
      name: 'resource',
      component: () => import('../views/ResourceView.vue')
    },
    {
      path: '/model-utilization',
      name: 'util',
      component: () => import('../views/UtilizationView.vue')
    }
  ]
})

export default router
