import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Tasklist from '@/views/task_list.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/CommonView/Main.vue'),
    children: [
      {
        path: 'tasklist',
        name: 'Tasklist',
        component: Tasklist
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
