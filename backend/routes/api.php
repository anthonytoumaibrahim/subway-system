<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ChatController;
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
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/get-profile', 'getProfile');
    Route::post('/upload-pfp', 'uploadPfp');
    Route::get('/get-stations', 'getStations')->withoutMiddleware('auth:api');
    Route::get("/user-rides", "getUserRides");
    Route::get("/station-rides", "getStationRides");
    Route::get("/user-rides", "getUserRides");
    Route::post("/book-ride", "bookRide");
    Route::post('/send-coin-request', 'sendCoinRequest');
    Route::prefix('/chat')->controller(ChatController::class)->group(function () {
        Route::get('/get-stations', 'getStations');
        Route::post('/get-chats', 'getChats');
        Route::post('/send-message', 'sendMessage');
    });
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


Route::prefix('/manager')->middleware(['api', 'auth:api', ManagerAuth::class])->group(function(){
    Route::get('/get-stationInfo',[ManagerController::class,'getStationInfo']);
});
Route::get('/get-stationInfo',[ManagerController::class,'getStationInfo']);
Route::get('/get-rides',[ManagerController::class,'getRideInfo']);
Route::post('/update-stationInfo',[ManagerController::class,'updateStationInfo']);
Route::post('/update-rides',[ManagerController::class,'updateRideInfo']);
Route::post('/create-rides',[ManagerController::class,'createRide']);









Route::get('/get-stations', [UserController::class, 'getStations']);
Route::get("/user-rides", [UserController::class, "getUserRides"]);
