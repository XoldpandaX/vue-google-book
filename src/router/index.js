import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTES } from '@/constants';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
    component: Home,
  },
  {
    path: ROUTES.SEARCH.PATH,
    name: ROUTES.SEARCH.NAME,
    component: About,
  },
];

const router = new VueRouter({ routes });

export default router;
