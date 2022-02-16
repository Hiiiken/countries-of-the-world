import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutCountry from '../views/AboutCountry.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutCountry',
    component: AboutCountry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
