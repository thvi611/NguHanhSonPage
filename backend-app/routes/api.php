<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/user/{user} ', [UserController::class, 'show']);
Route::post('/login ', [UserController::class, 'login']);
Route::post('/register ', [UserController::class, 'register']);

Route::get('/post', [PostController::class, 'index']);
Route::get('/post/{post}', [PostController::class, 'show']);
Route::get('/post/category/{category}', [PostController::class, 'getPostByCategoryId']);
Route::post('/post', [PostController::class, 'store']);
Route::delete('/post/{post}', [PostController::class, 'destroy']);
// Route::resource('post',PostController::class);

// Route::resource('/category',CategoryController::class);
Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'store']);
Route::delete('/category/{category}', [CategoryController::class, 'destroy']);

// comments
Route::post('/comment', [CommentController::class, 'store']);
Route::delete('/comment/{comment}', [CommentController::class, 'destroy']);
