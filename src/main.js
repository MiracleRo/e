import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

router.push('./goods');
/* eslint-disable no-new */
