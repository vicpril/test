let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

// NOW-UI-DASHBOARD
// mix
//   .js('resources/js/now-ui-dashboard.back.js', 'public/js/now-ui-back.js')
//   .sass('resources/sass/now-ui-dashboard.scss', 'public/css/now-ui-back.css');

// mix
//   .js('resources/js/now-ui-dashboard.back.js', 'public/js/')
//   .extract(['lodash', 'bootstrap', 'popper.js', 'axios', 'jquery', 'vue'])
//   .sass('resources/sass/now-ui-dashboard.scss', 'public/css/');

// @COREUI - DASHBOARD
// copy from modules

// mix.copyDirectory(
//    "node_modules/@coreui/coreui/js/src",
//    "resources/js/coreui"
// ).copyDirectory("node_modules/@coreui/coreui/scss", "resources/sass/coreui");

mix.js("resources/js/coreui.js", "public/js/")
   .extract([
      "lodash",
      "jquery",
      "popper.js",
      "bootstrap",
      // "resources/js/coreui/index.js",
      "axios",
      "vue"
   ])
   .sass("resources/sass/coreui/coreui.scss", "public/css/");
