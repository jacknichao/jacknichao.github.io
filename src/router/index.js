import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home'
import publications from '../views/publications'
import services from '../views/services'
import artifacts from '../views/artifacts'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/publications',
    name: 'publications',
    component: publications
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/artifacts',
    name: 'artifacts',
    component: artifacts
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
