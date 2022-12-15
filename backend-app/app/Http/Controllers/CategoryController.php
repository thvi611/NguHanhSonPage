<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Image;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = Category::all()->load('posts','guides');
        // dd($categories->toArray());
        // return $categories->posts;
        // $categories = $categories->toArray();
        $categories->each(function($category) {
            $category->posts_count = count($category->posts);
            $category->guides_count = count($category->guides);
        });
        return $categories;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name','detail');
        try {
            $category = Category::create([
                'name' => $data['name'],
                'detail' => $data['detail']
            ]);
            $uploadFile = $request->file('image');
            if ($uploadFile){
                $file_name = $uploadFile->hashName();
                $uploadFile->storeAs('public/images', $file_name);
                $path = '/images/'.$file_name;
                if(Image::insert([
                    'imageable_id'=> $category->id,
                    'imageable_type' => 'App\Models\Category',
                    'url' => $path,
                    "created_at" =>  \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ])){
                    return ['message' => 'Create category successed'];
                }
            }
            return ['message' => 'Create category successed'];
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 424);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return ['message' => 'Delete category successed!'];
    }
}
