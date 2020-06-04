<?php

use Illuminate\Support\Facades\Route;

Route::get('job_history', 'JobHistoryController@index');
Route::post('job_history/{job_opportunity_id}', 'JobHistoryController@store');
