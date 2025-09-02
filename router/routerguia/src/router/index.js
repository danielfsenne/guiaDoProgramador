import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CadastroView from '@/views/CadastroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: "/daniel",
    name: 'Daniel',
    component: CadastroView,
    children: [
      {
        path: 'senne',
        name: 'Senne',
        component: AboutView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
