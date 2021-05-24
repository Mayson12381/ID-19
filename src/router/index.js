import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '/src/views/Dashboard.vue'
import Users from '/src/views/Users.vue'
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
    history: createWebHistory(),
    routes,
})
export default router