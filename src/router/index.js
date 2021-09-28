import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePostulant from '../components/home_postulant'
import WatchJob from '../components/watch_job'
import Postulation from "../components/postulation-step-1";
import Postulation2 from '../components/postulation-step-2';
import Postulation3 from '../components/postulation-step-3'
import ConfirmationPostulation from '../components/confirmation-postulation'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home_postulant',
    name: 'home_postulant',
    component: HomePostulant
  },
  {
    path: '/watch_job',
    name: 'watch_job',
    component: WatchJob
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path:'/watch_job/postulation',
    name: 'Postulation',
    component: Postulation
  },
  {
    path:'/watch_job/postulation2',
    name: 'Postulation-step-2',
    component: Postulation2
  },
  {
    path:'/watch_job/postulation3',
    name: 'postulation-step-3',
    component: Postulation3
  },
  {
    path: '/watch_job/confirmation',
    name: 'confirmation-postulation',
    component: ConfirmationPostulation
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
