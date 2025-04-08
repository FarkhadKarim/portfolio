import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/HomePage.vue'
import MotionDesign from '@/views/MotionDesign/MotionDesign.vue'
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/motiondesign',
    component: MotionDesign,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
