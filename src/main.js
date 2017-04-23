import Vue from 'vue';
import App from './App';
import router from './router';
import 'common/stylus/index.styl';
import VueResource from 'vue-resource';

// 注册vue-router  vue-resource 通用样式;

Vue.use(VueResource);

// 使用vue-resource;

new Vue({
  router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');

// 使用vue-router 标注渲染部分;

 router.push('./goods');

// 使用'./goods'为默认路由;
/* eslint-disable no-new */
