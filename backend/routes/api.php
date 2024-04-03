<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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

Route::prefix('/admin')->middleware(['api', 'auth:api', AdminAuth::class])->controller(AdminController::class)->group(function () {
    Route::get('/get-statistics', 'getStatistics');
    Route::get('/get-stations', 'getStations');
    Route::post('/create-station', 'createStation');
    Route::post('/delete-station', 'deleteStation');
    Route::post('/activate-station', 'activateStation');
    Route::get('/get-coin-requests', 'getCoinRequests');
    Route::post('/update-coin-request', 'updateCoinRequest');
});

Route::get('/get-stations', [UserController::class, 'getStations']);

Route::get("/user-rides", [UserController::class, "getUserRides"]);
