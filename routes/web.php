<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

/** PAGES THAT SHOULD NOT BE LOCALIZED **/

Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::match(['get', 'post'], 'logout', 'Auth\LoginController@logout')->name('logout');

Route::prefix('admin')->namespace('Back')->group(function () {

    Route::middleware('redac')->group(function () {
        Route::name('admin')->get('/', 'AdminController@dashboard');

        Route::resource('jobs', 'JobsController')->except(['create', 'show']);
        Route::resource('users', 'UsersController')->except(['show']);
        Route::resource('articles', 'ArticlesController')->except(['show']);
        Route::resource('issues', 'IssuesController')->except(['show', 'update']);
        Route::resource('categories', 'CategoriesController')->only(['index']);
        Route::resource('tags', 'TagsController')->only(['index']);
        
        //pages and menus
        Route::resource('pages', 'PagesController')->except(['show']);
        Route::resource('menus', 'MenusController')->only(['index']);


        // export
        Route::post('export/{action}', 'ExportController@index')->name('export')->where('action', 'article|authors|content|emails|rinc');

        // template's examples
        Route::get('icons', function () {return view(env('THEME_BACK') . '.examples.icons')->render();});
        Route::get('test', 'AdminController@test')->name('ckeditor-test');
    });

    Route::middleware(['auth', 'admin'])->group(function () {
        Route::resource('articles', 'ArticlesController');

    });
});


/** PAGES THAT SHOULD BE LOCALIZED **/

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath'],
    ],
    function () {
        /** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/
        Route::name('home')->get('/', 'IndexController@index');
        
        // Route::resource('/articles', 'ArticlesController', ['only' => ['index']]);
        
        Route::name('articles')->get('articles', 'ArticlesController@index');
        Route::name('article')->get('articles/{articleAlias}', 'ArticlesController@show');
        
        // Route::name('page')->get('{pageAlias}', 'PagesController@show');
        

        Route::resource('categories', 'CategoriesController', [
            'only' => ['show'],
            'parameters' => ['categories' => 'alias'],
        ]);
        Route::resource('tags', 'TagsController', [
            'only' => ['show'],
            'parameters' => ['tags' => 'alias'],
        ]);

        Route::resource('authors', 'AuthorsController', [
            'only' => ['index', 'show'],
            'parameters' => ['authors' => 'alias'],
        ]);

        // Route::name('archive')->get('/archive', 'ArticlesController@archiveIndex');
        Route::name('archive')->get('/archive', function() { return 'archive' ;});
        Route::name('redkollegiya')->get('/redkollegiya', function() { return 'redkollegiya' ;});
        Route::name('contacts')->get('/contacts', function() { return 'contacts' ;});
        Route::name('authors')->get('/authors', function() { return 'authors' ;});


        // Route::name('page')->get('{pageAlias}', function() { return 'hello' ;});
//         Route::name('page')->get('{pageAlias}', 'PagesController@index');
           Route::name('page')->get('/{page}', 'SpaController@index')->where('page', '.*');


    });