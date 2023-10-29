import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/AboutUs.vue')
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./views/MyCatalog.vue')
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: () => import('./views/MyDelivery.vue')
    },
    {
        path: '/bars',
        name: 'bars',
        component: () => import('./views/products/Bars.vue')
    },
    {
        path: '/low_bars',
        name: 'low_bars',
        component: () => import('./views/products/LowBars.vue')
    },
    {
        path: '/stand',
        name: 'stand',
        component: () => import('./views/products/Stand.vue')
    },
    {
        path: '/paralets',
        name: 'paralets',
        component: () => import('./views/products/Paralets.vue')
    },
    {
        path: '/rubber',
        name: 'rubber',
        component: () => import('./views/products/Rubber.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;