<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\OrderController;
use Illuminate\Support\Facades\Route;


Route::get('/products/index',       [ProductsController::class, 'index'] );
Route::get('/product/show/{id}',    [ProductsController::class, 'show']  );
Route::post('/search',              [ProductsController::class, 'search']);
Route::get('/categories/index',     [CategoryController::class, 'index'] );

Route::post('/customers/login',     [LoginController::class,    'login'   ]);
Route::post('/customers/register',  [RegisterController::class, 'register']);


Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/customers/logout', [LoginController::class, 'logout']);

    Route::post('/order/add-to-cart',       [OrderController::class, 'addToCart']);
    Route::post('/order/checkout',          [OrderController::class, 'postCheckout']);
    Route::post('/order/check-coupon',      [OrderController::class, 'postApplyCoupon']);

});
