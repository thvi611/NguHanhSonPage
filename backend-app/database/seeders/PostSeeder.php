<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Image;
use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categories = Category::all();
        Post::factory(20)->create()->each(function($post) use ($categories){   
            Image::factory(1)->create([
                'imageable_id' => $post->id,
                'imageable_type' => 'App\Models\Post',
                // 'url' => 'images/posts' . basename($fakerFileNamePost)
            ]);

            Comment::factory(rand(0,15))->create(['post_id' => $post->id])
                                        ->each(function($comment){
                                            Image::factory(1)->create([
                                                'imageable_id' => $comment->id,
                                                'imageable_type' => 'App\Models\Comment',
                                                // 'url' => 'images/comments' . basename($fakerFileNameComment)
                                            ]);
                                        });

            $attach = $categories->shuffle();
            for ($i=0; $i < rand(1,3); $i++) { 
                $post->categories()->attach([
                    $attach[$i]->id
                ]);
            }
        });
    }
}
