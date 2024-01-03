import { createRouter, createWebHistory } from "vue-router";
//admin
import homeAdminIndex from '../components/admin/home/index.vue';

//pages
import homePageIndex from '../components/pages/home/index.vue';

import notFound from '../components/notFound.vue';

const routes = [
    //Admin
    {
        path: '/admin/home',
        component: homeAdminIndex
    },

    //Pages
    {
        path: '/',
        component: homePageIndex
    },

    //Not Found
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router