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
        path: '/first_paralets',
        name: 'first-paralets',
        component: () => import('./views/details/paralets_details/FirstParalets.vue')
    },
    {
        path: '/second_paralets',
        name: 'second-paralets',
        component: () => import('./views/details/paralets_details/SecondParalets.vue')
    },
    {
        path: '/third_paralets',
        name: 'third-paralets',
        component: () => import('./views/details/paralets_details/ThirdParalets.vue')
    },
    {
        path: '/fourth_paralets',
        name: 'fourth-paralets',
        component: () => import('./views/details/paralets_details/FourthParalets.vue')
    },
    {
        path: '/fifth_paralets',
        name: 'fifth-paralets',
        component: () => import('./views/details/paralets_details/FifthParalets.vue')
    },
    {
        path: '/six_paralets',
        name: 'six-paralets',
        component: () => import('./views/details/paralets_details/SixParalets.vue')
    },
    {
        path: '/six_paralets',
        name: 'six-paralets',
        component: () => import('./views/details/paralets_details/SixParalets.vue')
    },
    {
        path: '/seven_paralets',
        name: 'seven-paralets',
        component: () => import('./views/details/paralets_details/SevenParalets.vue')
    },
    {
        path: '/rubber',
        name: 'rubber',
        component: () => import('./views/products/Rubber.vue')
    },
    {
        path: '/yellow_rubber',
        name: 'yellow_rubber',
        component: () => import('./views/details/rubber_details/YellowRubber.vue')
    },
    {
        path: '/red_rubber',
        name: 'red_rubber',
        component: () => import('./views/details/rubber_details/RedRubber.vue')
    },
    {
        path: '/black_rubber',
        name: 'black_rubber',
        component: () => import('./views/details/rubber_details/BlackRubber.vue')
    },
    {
        path: '/violet_rubber',
        name: 'violet_rubber',
        component: () => import('./views/details/rubber_details/VioletRubber.vue')
    },
    {
        path: '/green_rubber',
        name: 'green_rubber',
        component: () => import('./views/details/rubber_details/GreenRubber.vue')
    },
    {
        path: '/blue_rubber',
        name: 'blue_rubber',
        component: () => import('./views/details/rubber_details/BlueRubber.vue')
    },
    {
        path: '/yellow_second',
        name: 'yellow-second',
        component: () => import('./views/details/rubber_details/YellowSecond.vue')
    },
    {
        path: '/red_second',
        name: 'red-second',
        component: () => import('./views/details/rubber_details/RedSecond.vue')
    },
    {
        path: '/black_second',
        name: 'black-second',
        component: () => import('./views/details/rubber_details/BlackSecond.vue')
    },
    {
        path: '/violet_second',
        name: 'violet-second',
        component: () => import('./views/details/rubber_details/VioletSecond.vue')
    },
    {
        path: '/green_second',
        name: 'green-second',
        component: () => import('./views/details/rubber_details/GreenSecond.vue')
    },
    {
        path: '/blue_second',
        name: 'blue-second',
        component: () => import('./views/details/rubber_details/BlueSecond.vue')
    },
    {
        path: '/linings',
        name: 'linings',
        component: () => import('./views/products/Linings.vue')
    },
    {
        path: '/first_linings',
        name: 'first-linings',
        component: () => import('./views/details/linings_details/FirstLinings.vue')
    },
    {
        path: '/second_linings',
        name: 'second-linings',
        component: () => import('./views/details/linings_details/SecondLinings.vue')
    },
    {
        path: '/bandages',
        name: 'bandages',
        component: () => import('./views/products/Bandages.vue')
    },
    {
        path: '/naruto_old',
        name: 'naruto-old',
        component: () => import('./views/details/bandages_details/NarutoOld.vue')
    },
    {
        path: '/magnesium',
        name: 'magnesium',
        component: () => import('./views/products/Magnesium.vue')
    },
    {
        path: '/first_magnesium',
        name: 'first-magnesium',
        component: () => import('./views/details/magnesium_details/FirstMagnesium.vue')
    },
    {
        path: '/second_magnesium',
        name: 'second-magnesium',
        component: () => import('./views/details/magnesium_details/SecondMagnesium.vue')
    },
    {
        path: '/third_magnesium',
        name: 'third-magnesium',
        component: () => import('./views/details/magnesium_details/ThirdMagnesium.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;