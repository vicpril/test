//CORE
require("./bootstrap");

// PLUGINS
require("jquery-validation");

// require('jquery-colorbox');

require("./now-ui-dashboard/plugins/bootstrap-notify");

// require('./now-ui-dashboard/plugins/chartjs.min');

require("./now-ui-dashboard/plugins/perfect-scrollbar.jquery.min");

// THEME
require("./now-ui-dashboard/now-ui-dashboard");

// require('./now-ui-dashboard/now-ui-dashboard.min');

window.Vue = require("vue");
window.VueRouter = require("vue-router");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component(
   "user-list",
   require("./components/back/users/UserList.vue").default
);
Vue.component(
   "user-profile",
   require("./components/back/users/UserProfile.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
   el: "#app"
});
