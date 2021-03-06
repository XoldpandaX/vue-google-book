import Vue from 'vue';
import * as firebase from 'firebase';
import createRouter from './router';
import createStore from '@/store';
import { FIREBASE_CONFIG } from './constants';
import { clickOutside } from './derectives';
import { settingUpVeeValidate, installInfiniteScroll, installVueShortKey } from './plugins';

import { App } from './components/app';

Vue.config.productionTip = false;

let app;
const store = createStore();
const router = createRouter(store);

settingUpVeeValidate();
installInfiniteScroll();
installVueShortKey();

Vue.directive('click-outside', clickOutside);

firebase.initializeApp(FIREBASE_CONFIG);
firebase.auth().onAuthStateChanged(async (user) => {
  // received user and doesn't have user data in the store - (in case of page reloading)
  if (!app && user) {
    await store.dispatch('auth/saveUser', user);
    await store.dispatch('library/fetchAllUserFavoriteBooks');
  }

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
