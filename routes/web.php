<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;


Route::get('/', [HomeController::class, 'index']);
Route::get('/movie-list', [MovieController::class, 'MovieList']);
Route::get('/movie-detail', [MovieController::class, 'MovieDetail']);
Route::get('/profile', [ProfileController::class, 'Profile']);



// ADMIN

Route::get('/dashboard', [AdminController::class, 'adminDashboard']);
