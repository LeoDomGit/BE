<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PhongTroController;
use App\Http\Controllers\GoogleController;


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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [RoleController::class,'login']);
Route::middleware(['CheckLogin'])->group(function () {
    Route::get('/users', [RoleController::class,'index']);
    Route::get('/quan', [PhongTroController::class,'index']);
    Route::get('/phongtro', [PhongTroController::class,'index2']);
    Route::get('/logout', [RoleController::class,'logout']);
});

Route::get('/login', [RoleController::class,'login']);
Route::get('/test', [RoleController::class,'test']);
Route::get('auth/google', [GoogleController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleController::class, 'callbackGoogle']);
