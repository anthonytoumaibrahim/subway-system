<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminAuth;
use App\Http\Middleware\ManagerAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->middleware('api')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware(['api', 'auth:api'])->controller(UserController::class)->group(function () {
    Route::get('/get-profile', 'getProfile');
    Route::post('/upload-pfp', 'uploadPfp');
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

Route::prefix('/manager')->middleware(['api', 'auth:api', ManagerAuth::class])->group(function () {
    Route::get('/get-stationInfo', [AdminController::class, 'getStationInfo']);
});

Route::get('/get-stations', [UserController::class, 'getStations']);

Route::get("/user-rides", [UserController::class, "getUserRides"]);

Route::get("/station-rides", [UserController::class, "getStationRides"]);
