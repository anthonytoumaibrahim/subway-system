<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Auth routes
Route::prefix('/auth')->middleware('api')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::prefix('/admin')->middleware(['api', 'auth:api', AdminAuth::class])->group(function () {
    Route::get('/get', function () {
        return response()->json(['hello world']);
    });
});
