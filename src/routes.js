import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./views/MyCatalog.vue')
    },
    {
        path: '/render',
        name: 'render',
        component: () => import('./views/MyDelivery.vue')
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;