/*import Vue from 'vue';
import VueRouter from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history'});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
*/
require('./bootstrap');
import { createApp } from 'vue';
import homeC from './components/HomeComponent.vue';
let app=createApp({})
app.component('home-component' , homeC);
app.mount("#app")