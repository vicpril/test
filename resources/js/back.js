// jquery
// popper
// bootstrap
require("./bootstrap");

// bootstrap-vue
// .... may be later

// core @coreui
require("./coreui/index.js");

//plugins
require("jquery-colorbox");
require("./plugins/bootstrap-notify");

//Vue
window.Vue = require("vue");

//Vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Vuex
import { store } from "./components/back/store";

//BootstrapVue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

//Notification
import Notifications from "vue-notification";
Vue.use(Notifications);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component(
   "user-list",
   require("./components/back/users/UserList.vue").default
);
Vue.component(
   "user-profile",
   require("./components/back/users/UserProfile.vue").default
);
Vue.component(
   "categories-list",
   require("./components/back/categories/CategoriesList.vue").default
);

Vue.component("alert", require("./components/back/Alert.vue").default);
Vue.component(
   "file-picker",
   require("./components/back/FilePicker.vue").default
);
Vue.component("vue-test", require("./components/back/VueTest.vue").default);

Vue.mixin({
   props: {
      errors: {
         type: Object,
         default: () => ({})
      }
   },
   mounted() {
      //     if(! this.isEmptyObject(this.errors)) {
      //       this.showErrors(this.errors);
      //     }
   },

   methods: {
      isEmptyObject(someObject) {
         return (
            Object.entries(someObject).length === 0 &&
            someObject.constructor === Object
         );
      },

      showErrors(errors) {
         console.log("try note");
         Object.keys(errors).forEach(key => {
            const title = "";
            var text = "";
            errors[key].forEach(err => {
               text = text + '<p><i class="fa fa-circle"></i> ' + err + "</p>";
               Vue.notify({
                  group: "custom-template",
                  title: title,
                  text: err,
                  type: "alert-danger",
                  duration: -1
               });
            });
         });
      }
   }
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
   mode: "history"
});

const app = new Vue({
   router,
   //    storage: {path: window.location.origin + '/storage/'},
   store,
   el: "#app"
});
