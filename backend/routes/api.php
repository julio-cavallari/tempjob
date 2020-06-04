<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
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

Route::post('login', 'AuthController@login');
Route::post('user', 'UserController@store');
Route::get('dropdown/job_opportunity', 'JobOpportunityController@dropdown');

Route::group(['middleware' => "api"], function() {

    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('getttl', 'AuthController@getTTL');

    $routesInFolder = File::files(base_path() . DIRECTORY_SEPARATOR . 'routes/api');
    foreach($routesInFolder as $path)
    {
        $file = (object)pathinfo($path);
        if($file->extension === 'php')
        {
            require_once $file->dirname . DIRECTORY_SEPARATOR . $file->basename;
        }
    }

});
