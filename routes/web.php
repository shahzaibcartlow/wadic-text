<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::prefix('auth')->group(function (){
    Route::get('/init', [App\Http\Controllers\Auth\AuthController::class, 'init']);
    Route::post('/login', [App\Http\Controllers\Auth\AuthController::class, 'login']);
});

Route::get('/get_tiers', [App\Http\Controllers\GeneralController::class, 'getTier']);
Route::get('/get_processors', [App\Http\Controllers\GeneralController::class, 'getProcessors']);
Route::post('/store_user_session', [App\Http\Controllers\GeneralController::class, 'storeUserSession']);
Route::get('/get_user_cart/{ip}', [App\Http\Controllers\GeneralController::class, 'getUserCartDetail']);
Route::get('/get_ip', [App\Http\Controllers\GeneralController::class, 'getIpAddress']);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/{any}', [App\Http\Controllers\SMDefaultController::class, 'default'])->where('any','.*');



Auth::routes();

