<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
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
        // Post::factory()
        // ->count(20)
        // ->hasMany(Comment::factory()->count(rand(0,15))->create()->each(function($post){

        // }))
        // ->create()
        // ->each(function($post) use ($categories){
        //     $attach = $categories->shuffle();
        //     for ($i=0; $i < rand(1,4); $i++) { 
        //         $post->categories()->attach([
        //             $attach[$i]->id
        //         ]);
        //     }
        // });
        Post::factory(20)->create()->each(function($post) use ($categories){
            Comment::factory(rand(0,15))->create(['post_id' => $post->id]);

            $attach = $categories->shuffle();
            for ($i=0; $i < rand(1,4); $i++) { 
                $post->categories()->attach([
                    $attach[$i]->id
                ]);
            }
        });
    }
}
