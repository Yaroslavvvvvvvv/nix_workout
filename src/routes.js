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
        path: '/shopping',
        name: 'shopping',
        component: () => import('./components/ShoppingCart.vue')
    },
    {
        path: '/bars',
        name: 'bars',
        component: () => import('./views/products/Bars.vue')
    },
    {
        path: '/bars-details',
        name: 'bars-details',
        component: () => import('./views/details/bars_details/BarsDetails.vue')
    },
    {
        path: '/second-bars-details',
        name: 'second-bars-details',
        component: () => import('./views/details/bars_details/SecondBardDetails.vue')
    },
    {
        path: '/third-bars-details',
        name: 'third-bars-details',
        component: () => import('./views/details/bars_details/ThirdBarsDetails.vue')
    },
    {
        path: '/fourth-bars-details',
        name: 'fourth-bars-details',
        component: () => import('./views/details/bars_details/FourthBarsDetails.vue')
    },
    {
        path: '/low_bars',
        name: 'low_bars',
        component: () => import('./views/products/LowBars.vue')
    },
    {
        path: '/first_low_bars',
        name: 'first_low_bars',
        component: () => import('./views/details/low_bars/FirstLowBars.vue')
    },
    {
        path: '/second_low_bars',
        name: 'second_low_bars',
        component: () => import('./views/details/low_bars/SecondLowBars.vue')
    },
    {
        path: '/third_low_bars',
        name: 'third_low_bars',
        component: () => import('./views/details/low_bars/ThirdLowBars.vue')
    },
    {
        path: '/stand',
        name: 'stand',
        component: () => import('./views/products/Stand.vue')
    },
    {
        path: '/first_stand',
        name: 'first-stand',
        component: () => import('./views/details/stand_details/FirstStand.vue')
    },
    {
        path: '/second_stand',
        name: 'second-stand',
        component: () => import('./views/details/stand_details/SecondStand.vue')
    },
    {
        path: '/third_stand',
        name: 'third-stand',
        component: () => import('./views/details/stand_details/ThirdStand.vue')
    },
    {
        path: '/fourth_stand',
        name: 'fourth-stand',
        component: () => import('./views/details/stand_details/FourthStand.vue')
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
    {
        path: '/linings',
        name: 'linings',
        component: () => import('./views/products/Linings.vue')
    },
    {
        path: '/bandages',
        name: 'bandages',
        component: () => import('./views/products/Bandages.vue')
    },
    {
        path: '/magnesium',
        name: 'magnesium',
        component: () => import('./views/products/Magnesium.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;