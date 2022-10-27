import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import welcome from './App.vue'
import store from '../../store';
import  routes  from './routes';
// import ChatMessage from './ChatMessage';
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  // ChatMessage,
  store,
  welcome,
  router
}).$mount('#app')