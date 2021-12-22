import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import ComponentHome from './components/ComponentHome.vue';
import ComponentCreate from './components/ComponentCreate.vue';
import ComponentIndex from './components/ComponentIndex.vue';
import ComponentEdit from './components/ComponentEdit.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: ComponentHome
  },
  {
    name: 'posts',
    path: '/posts',
    component: ComponentIndex
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: ComponentEdit
  },
  {
      name: 'create',
      path: '/create',
      component: ComponentCreate
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: ComponentEdit
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
