import Vue from 'vue';
import router from './router';
import store from './store';
import { SettingUpVeeValidate } from './utils';

import { App } from './components/app';

SettingUpVeeValidate();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
