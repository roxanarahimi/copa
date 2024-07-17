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
    {
        path: '/teasers',
        name: 'teasers',
        component: () => import(/* webpackChunkName: "teasers" */ '../views/Teasers')
    },

    //********************************* arabic routes **********************************************************
    {
        path: '/ar/',
        name: 'homeArabic',
        component: () => import(/* webpackChunkName: "about" */ '../views/ar/Home')
    },
    {
        path: '/ar/about',
        name: 'aboutArabic',
        component: () => import(/* webpackChunkName: "about" */ '../views/ar/About')
    },

    {
        path: '/ar/products',
        name: 'productsArabic',
        component: () => import(/* webpackChunkName: "products" */ '../views/ar/Products')
    },

    {
        path: '/ar/product/:id',
        name: 'productArabic',
        params: true,
        props: true,
        component: () => import(/* webpackChunkName: "product" */ '../views/ar/Product')
    },

    {
        path: '/ar/recipes',
        name: 'recipesArabic',
        component: () => import(/* webpackChunkName: "recipes" */ '../views/ar/Recipes')
    },

    {
        path: '/ar/recipe/:id',
        name: 'recipeArabic',
        params: true,
        props: true,
        component: () => import(/* webpackChunkName: "recipe" */ '../views/ar/Recipe')
    },
    {
        path: '/ar/teasers',
        name: 'teasersArabic',
        component: () => import(/* webpackChunkName: "teasers" */ '../views/ar/Teasers')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
