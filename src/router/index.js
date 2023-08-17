import {createRouter, createWebHistory} from 'vue-router'
import home from "@/views/Home";
const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About')
    },

    {
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Products')
    },

    {
        path: '/product/:id',
        name: 'product',
        params: true,
        props: true,
        component: () => import(/* webpackChunkName: "product" */ '../views/Product')
    },

    {
        path: '/recipes',
        name: 'recipes',
        component: () => import(/* webpackChunkName: "recipes" */ '../views/Recipes')
    },

    {
        path: '/recipe/:id',
        name: 'recipe',
        params: true,
        props: true,
        component: () => import(/* webpackChunkName: "recipe" */ '../views/Recipe')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
