import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTES } from '@/constants';

import { HomePage } from '@/components/routes/home/page';
import { SearchPage } from '@/components/routes/search/page';

Vue.use(VueRouter);

export default (store) => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
        component: HomePage,
        meta: {
          isAuthRequired: false,
        },
      },
      {
        path: ROUTES.SEARCH.PATH,
        name: ROUTES.SEARCH.NAME,
        component: SearchPage,
        meta: {
          isAuthRequired: true,
        },
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    if (to.meta.isAuthRequired && !store.getters['auth/isUserLoggedIn']) {
      next({ name: ROUTES.HOME.NAME });
    }

    if (!to.meta.isAuthRequired && store.getters['auth/isUserLoggedIn']) {
      next({ name: ROUTES.SEARCH.NAME });
    }

    next(true);
  });

  return router;
};
