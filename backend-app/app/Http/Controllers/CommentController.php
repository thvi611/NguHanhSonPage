<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Image;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = $request->only('guide_id','post_id','name','content');
        try {
            if (isset($data['post_id'])){
                if ($data['post_id'] != null){
                    $data['guide_id'] = null;
                    $comment = Comment::create([
                        'name' => $data['name'],
                        'content' => $data['content'],
                        'post_id' => $data['post_id'],
                        'guide_id' => $data['guide_id']
                    ]);
                }
            }
            if (isset($data['guide_id'])){
                if ($data['guide_id'] != null) {
                    $data['post_id'] = null;
                    $comment = Comment::create([
                        'name' => $data['name'],
                        'content' => $data['content'],
                        'post_id' => $data['post_id'],
                        'guide_id' => $data['guide_id']
                    ]);
                }
            }
            $uploadFile = $request->file('image');
            if ($uploadFile) {       
                $file_name = $uploadFile->hashName();
                $uploadFile->storeAs('public/images', $file_name);
                $path = '/images/'.$file_name;
                if(Image::insert([
                    'imageable_id'=> $comment->id,
                    'imageable_type' => 'App\Models\Comment',
                    'url' => $path,
                    "created_at" =>  \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ])){
                    return ['message' => 'Create comment successed'];
                }
            }
            return ['message' => 'Create comment successed'];
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
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
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
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
        $comment->delete();
        return ['message' => 'Delete comment successed!'];
    }
}
