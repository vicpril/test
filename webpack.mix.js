let mix = require('laravel-mix');

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

// myTheme - back
// mix
//   .js('resources/js/myTheme.back.js', 'public/js/back.js')
//   .sass('resources/sass/myTheme.back.scss', 'public/css/back.css');

// NOW-UI-DASHBOARD
mix
  .js('resources/js/now-ui-dashboard.js', 'public/js/now-ui-back.js')
  .sass('resources/sass/now-ui-dashboard.scss', 'public/css/now-ui-dashboard-back.css');