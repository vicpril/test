<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('users', 'Api\UsersController')->except('index', 'update')->middleware('auth:api');
Route::apiResource('users', 'Api\UsersController')->only('index');
Route::get('userslist/', 'Api\UsersController@getList');

Route::apiResource('issues', 'Api\IssuesController')->except('index', 'store')->middleware('auth:api');
Route::apiResource('issues', 'Api\IssuesController')->only('index');
Route::post('issues/exists', 'Api\IssuesController@checkIssueExists')->middleware('auth:api');

Route::apiResource('articles', 'Api\ArticlesController')->except('index', 'update')->middleware('auth:api');
Route::apiResource('articles', 'Api\ArticlesController')->only('index');
Route::post('articles/status/{article}', 'Api\ArticlesController@statusChange')->middleware('auth:api');

Route::apiResource('categories', 'Api\CategoriesController')->except('index')->middleware('auth:api');
Route::apiResource('categories', 'Api\CategoriesController')->only('index');

Route::apiResource('tags', 'Api\TagsController')->except('index')->middleware('auth:api');
Route::apiResource('tags', 'Api\TagsController')->only('index');

Route::apiResource('pages', 'Api\PagesController')->except('index', 'update')->middleware('auth:api');
Route::apiResource('pages', 'Api\PagesController')->only('index');
Route::post('pages/status/{page}', 'Api\PagesController@statusChange')->middleware('auth:api');
Route::get('templates/', 'Api\PagesController@getTemplates');

Route::apiResource('menus', 'Api\MenusController')->except('index')->middleware('auth:api');
Route::apiResource('menus', 'Api\MenusController')->only('index');

