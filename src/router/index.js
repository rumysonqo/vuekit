import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/prog_meta',
        name: 'prog_meta',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Programa_meta.vue')
    },
    {
        path: '/prog_meta_tarea',
        name: 'prog_meta_tarea',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Programa_meta_tarea.vue')
    },
    {
        path: '/meta_clasif',
        name: 'meta_clasif',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Meta_clasificador.vue')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router