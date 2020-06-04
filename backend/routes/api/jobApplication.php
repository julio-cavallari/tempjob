<?php

use Illuminate\Support\Facades\Route;

Route::get('job_application', 'JobApplicationController@index');
Route::get('job_application/{id}', 'JobApplicationController@show');
Route::post('job_application/{job_opportunity_id}', 'JobApplicationController@store');
Route::put('job_application/{id}', 'JobApplicationController@update');
Route::delete('job_application/{id}', 'JobApplicationController@destroy');


Route::post('document/job_application', 'JobApplicationDocumentController@store');
Route::get('document/job_application', 'JobApplicationDocumentController@index');
Route::get('document/job_application/{id}', 'JobApplicationDocumentController@show');
