<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use PhpParser\Node\Expr\AssignOp\Pow;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = Post::all()->load('categories');
        return $posts;
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
            $post = Post::create([
                'title' => $data['title'],
                'content' => $data['content'],
                'image_path' => $data['image']
            ]);
            foreach($data['categories'] as $category){
                $post->categories()->attach([$category]);
            }
            //if create success
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
    public function show(Post $post)
    {
        //
        return $post->load('categories','comments');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function getPostByCategoryId(Category $category)
    {
        $category->load('posts');
        // $post = Post::all()->load(array('categories' => function($query) use ($category){
        //     $query->where('category_id',$category->id);
        // }));
        // return $post;
        return $category;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
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
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
        return ['message' => 'Delete post Successed!'];
    }
}
