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

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductsController;
use Illuminate\Support\Facades\Route;


Route::get('/products/index',       [ProductsController::class, 'index'] );
Route::get('/product/show/{id}',    [ProductsController::class, 'show'] );
Route::get('/categories',           [CategoryController::class, 'index'] );

// Route::post('/auth/login', [AuthController::class, 'loginUser']);
// Route::post('/auth/parent/login', [ParentAuthController::class, 'loginUser']);

// Route::middleware(['auth:sanctum'])->group(function () {

//     Route::prefix('students')->group(function (){
//         Route::post('markAllRead',[HomePageController::class,'markAllRead']);
//     });


// });
