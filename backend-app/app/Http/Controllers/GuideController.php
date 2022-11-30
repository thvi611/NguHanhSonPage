<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Guide;
use App\Models\Image;
use Illuminate\Http\Request;

class GuideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $guides = Guide::all()->load('categories');
        return $guides;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
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
        //
        $data = $request->only('title','content','categories','image');
        if (!isset($data['image'])){
            $data['image'] = null;
        }
        try {
            $post = Guide::create([
                'title' => $data['title'],
                'content' => $data['content'],
                'image_path' => $data['image']
            ]);
            foreach($data['categories'] as $category){
                $post->categories()->attach([$category]);
            }
            $uploadFile = $request->file('image');
            if ($uploadFile != null){
                $file_name = $uploadFile->hashName();
                $uploadFile->storeAs('public/images', $file_name);
                $path = '/images/'.$file_name;
                if(Image::insert([
                    'imageable_id'=> $post->id,
                    'imageable_type' => 'App\Models\Guide',
                    'url' => $path,
                    "created_at" =>  \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ])){
                    return ['message' => 'Create post successed'];
                }
            }
            return ['message' => 'Create post successed'];
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
    public function show(Guide $guide)
    {
        //
        return $guide->load('categories','comments');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function getGuideByCategoryId(Category $category)
    {
        $category->load('guides');
        // $post = Post::all()->load(array('categories' => function($query) use ($category){
        //     $query->where('category_id',$category->id);
        // }));
        // return $post;
        return $category->guides;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Guide $guide)
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
    public function update(Request $request, Guide $guide)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Guide $guide)
    {
        //
        $guide->delete();
        return ['message' => 'Delete post Successed!'];
    }
}
