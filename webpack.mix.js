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

// Copy Bootstrap
// mix.copyDirectory('node_modules/bootstrap/scss', 'resources/bootstrap/scss')
//     .copyDirectory('node_modules/bootstrap/js', 'resources/bootstrap/js');


// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/bootstrap/js/dist/util.js', 'public/js/bootstrap.js')
   .sass('resources/bootstrap/scss/bootstrap.scss', 'public/css/bootstrap.css');
