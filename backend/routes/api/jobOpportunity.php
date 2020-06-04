<?php

use Illuminate\Support\Facades\Route;

Route::get('job_opportunity', 'JobOpportunityController@index');
Route::get('job_opportunity/{id}', 'JobOpportunityController@show');
Route::post('update/job_opportunity/{id}', 'JobOpportunityController@update');
Route::post('delete/job_opportunity/{id}', 'JobOpportunityController@destroy');
