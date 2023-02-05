import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
import Cases from '../views/Cases.vue';
import Business from '../views/Business.vue';
import Services from '../views/ServicesPage.vue';
import Contacts from '../views/Contacts.vue';
import Politics from '../views/Politics.vue';
import Agree from '../views/Agree.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cases',
    name: 'Cases',
    component: Cases,
  },
  {
    path: '/business',
    name: 'Business',
    component: Business,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/politics',
    name: 'Politics',
    component: Politics,
  },
  {
    path: '/agree',
    name: 'Agree',
    component: Agree,
  },
  {
    path: '/instagram',
    beforeEnter() {location.href = 'http://instagram.com'}
  },
  {
    path: '/vk',
    beforeEnter() {location.href = 'http://vk.ru'}
  },
  {
    path: '/facebook',
    beforeEnter() {location.href = 'http://facebook.com'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;