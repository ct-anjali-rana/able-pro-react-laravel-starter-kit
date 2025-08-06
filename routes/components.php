<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('components-overview/buttons', function () {
    return Inertia::render('components-overview/buttons');
});