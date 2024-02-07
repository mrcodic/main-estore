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
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\WishlistController;
use Illuminate\Support\Facades\Route;


Route::get('/product/show/{id}',    [ProductsController::class, 'show']  );
Route::post('/search',              [ProductsController::class, 'search']);
Route::get('/categories/index',     [CategoryController::class, 'index'] );

Route::post('/customers/login',     [LoginController::class,    'login'   ]);
Route::post('/customers/register',  [RegisterController::class, 'register']);

Route::post('/order/add-to-cart',   [OrderController::class, 'addToCart']);

// Route::get('/customers/show',      [CustomerController::class, 'show']);
Route::get('/products/index',       [ProductsController::class, 'index'] );
Route::get('/discounts',            [ProductsController::class, 'discount'] );

Route::middleware(['auth:sanctum'])->group(function () {

    Route::prefix('customers')->group(function(){
        Route::post('/logout',          [LoginController::class, 'logout']);
        Route::post('/edit',            [CustomerController::class, 'update']);
        Route::get('/addresses',        [CustomerController::class, 'addresses']);
        Route::post('/addresses/add',   [CustomerController::class, 'addAddress']);
        Route::post('/addresses/edit',  [CustomerController::class, 'editAddress']);
        Route::post('/avatar/edit',     [CustomerController::class, 'postAvatar']);
        Route::get('/show',             [CustomerController::class, 'show']);
    });


    Route::get('/order/index',          [OrderController::class, 'index']);
    Route::post('/order/checkout',      [OrderController::class, 'postCheckout']);
    Route::post('/order/check-coupon',  [OrderController::class, 'postApplyCoupon']);
    Route::get('/order/show',           [OrderController::class, 'getCheckoutSuccess']);

    Route::prefix('favorite')->group(function(){
        Route::post('/add',     [WishlistController::class,'create']);
        Route::get('/get',      [WishlistController::class,'index']);
        Route::post('/remove',  [WishlistController::class,'remove']);
    });

});
