// jquery
// popper
// bootstrap
require("./bootstrap");

// bootstrap-vue
// .... may be later

// core @coreui
// require("./coreui/index.js");

//plugins
// require("jquery-colorbox");
// require("./plugins/bootstrap-notify");

//Vue
window.Vue = require("vue");

//Vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Vuex
// import { store } from "./components/back/store";

//BootstrapVue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

//Notification
// import Notifications from "vue-notification";
// Vue.use(Notifications);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from './components/front/App.vue';
import {routes} from './routes.js';

const router = new VueRouter({
   mode: "history",
   routes: routes,
});

const app = new Vue({
   router,
   el: "#app",
    components: { App }
});
