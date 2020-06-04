<?php

use Illuminate\Support\Facades\Route;

Route::get('user', 'UserController@index');
Route::get('user/{id}', 'UserController@show');
Route::post('update/user/{id}', 'UserController@update');
Route::post('user/avatar', 'UserController@updateAvatar');
Route::post('delete/user/{id}', 'UserController@destroy');
