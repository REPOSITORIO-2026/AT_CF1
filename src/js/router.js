import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from 'legored/plugin/components/Inicio.vue'
import Curso from '../pages/Curso.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () => import('../pages/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () => import('../pages/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () => import('../pages/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () => import('../pages/Tema3.vue'),
        },
        {
          path: 'tema4',
          name: 'tema4',
          component: () => import('../pages/Tema4.vue'),
        },
        {
          path: 'tema5',
          name: 'tema5',
          component: () => import('../pages/Tema5.vue'),
        },
      ],
    },
    {
      path: '/actividad',
      name: 'actividad',
      component: () => import('../pages/Actividad.vue'),
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: () => import('../pages/Glosario.vue'),
    },
    {
      path: '/complementario',
      name: 'complementario',
      component: () => import('../pages/Complementario.vue'),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () => import('../pages/Bibliografia.vue'),
    },
    {
      path: '/sintesis',
      name: 'sintesis',
      component: () => import('../pages/Sintesis.vue'),
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: () => import('../pages/Creditos.vue'),
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
