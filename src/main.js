import Vue from 'vue';
import * as firebase from 'firebase';
import router from './router';
import createStore from '@/store';
import { FIREBASE_CONFIG } from './constants';
import { settingUpVeeValidate } from './plugins';

import { App } from './components/app';

Vue.config.productionTip = false;

let app;
const store = createStore();
settingUpVeeValidate();

firebase.initializeApp(FIREBASE_CONFIG);
firebase.auth().onAuthStateChanged(async (user) => {
  // received user and doesn't have user data in the store - (in case of page reloading)
  if (!app && user) {
    await store.dispatch('auth/saveUser', user);
  }

  app = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
});
