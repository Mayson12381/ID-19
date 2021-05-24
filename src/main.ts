import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '/src/views/Dashboard.vue'
import Users from '/src/views/Users.vue'

import './index.css'

const routes = [
  {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
  },
  {
      path: '/users',
      name: 'Users',
      component: Users,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
