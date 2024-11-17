<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function MovieList () {
        return Inertia::render('clients/movie/MovieList');

    }

    public function MovieDetail () {
        return Inertia::render('clients/movie/MovieDetail');
    }
}
