<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', 'App\Http\Controllers\TodoController@index');
Route::post('/todos', 'App\Http\Controllers\TodoController@store');
Route::patch('/todos/{todo:id}', 'App\Http\Controllers\TodoController@update');
Route::delete('/todos/{todo:id}', 'App\Http\Controllers\TodoController@delete');
