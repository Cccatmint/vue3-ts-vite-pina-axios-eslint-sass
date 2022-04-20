import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue')
    },
    {
        path: '/test-store',
        name: 'TestStore',
        component: () => import('@/pages/testStore/testStore.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router