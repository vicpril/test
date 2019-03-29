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

Route::apiResource('users', 'Api\UsersController')->except('index')->middleware('auth:api');
Route::apiResource('users', 'Api\UsersController')->only('index');

Route::apiResource('categories', 'Api\CategoriesController')->except('index')->middleware('auth:api');
Route::apiResource('categories', 'Api\CategoriesController')->only('index');


// Route::middleware('auth:api')->get('categories', 'Api\CategoriesController@index');


