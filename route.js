import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
