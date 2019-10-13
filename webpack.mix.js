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

mix.js("resources/js/back.js", "public/js/")
   .js("resources/js/front.js", "public/js/")
   .extract([
      "lodash",
      "jquery",
      "popper.js",
      "bootstrap",
      // "resources/js/coreui/index.js",
      "axios",
      "vue"
   ])
   .sass("resources/sass/back/back.scss", "public/css/back.css")
   .sass("resources/sass/front/style.scss", "public/css/front.css");
