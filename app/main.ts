import Vue from 'nativescript-vue';
import Theme from '@nativescript/theme';

import App from './App.vue';

Vue.config.silent = TNS_ENV === 'production';

Theme.setMode(Theme.Light);
Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer,
);

new Vue({
  render: h => h('frame', [h(App)]),
}).$start();
