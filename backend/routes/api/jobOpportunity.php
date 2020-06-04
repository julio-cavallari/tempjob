<?php

use Illuminate\Support\Facades\Route;

Route::get('job_opportunity', 'JobOpportunityController@index');
Route::get('job_opportunity/{id}', 'JobOpportunityController@show');
Route::put('job_opportunity/{id}', 'JobOpportunityController@update');
Route::delete('job_opportunity/{id}', 'JobOpportunityController@destroy');
