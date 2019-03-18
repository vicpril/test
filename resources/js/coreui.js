// jquery
// popper
// bootstrap
require("./bootstrap");

// bootstrap-vue
// .... may be later

// core @coreui
require("./coreui/index.js");

//plugins
require("./plugins/bootstrap-notify");

//Vue
window.Vue = require("vue");
// window.VueRouter = require("vue-router");

import Notify from 'vue2-notify';
// Use Notify
Vue.use(Notify);

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
   "editor-test",
   require("./components/back/EditorTest.vue").default
);


Vue.mixin({
  props: {
    errors: {
					type: Object,
					default: () => ({})
				}
  },
  created() {
    if(! this.isEmptyObject(this.errors)) {
      this.showErrors(this.errors);
    }
    
  },
  methods: {
    isEmptyObject(someObject){
      return Object.entries(someObject).length === 0 && someObject.constructor === Object;
    },
    
    showErrors(errors) {
      var mes = '';
//       Object.keys(errors).forEach((name) => {
//         mes = mes + name + ": ";
//         errors[name].forEach((err) => {
//           mes = mes + err + ", ";
//         })
//         mes = mes + "<br>";
//       });
      
      alert(mes);
    }
    
  }
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
   el: "#app",
});
