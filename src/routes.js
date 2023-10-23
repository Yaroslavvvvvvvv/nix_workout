import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./views/MyCatalog.vue')
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;