<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Guide;
use App\Models\Image;
use Illuminate\Database\Seeder;

class GuideSeeder extends Seeder
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
        Guide::factory(20)->create()->each(function($guide) use ($categories){   
            Image::factory(1)->create([
                'imageable_id' => $guide->id,
                'imageable_type' => 'App\Models\Guide',
                // 'url' => 'images/posts' . basename($fakerFileNamePost)
            ]);

            Comment::factory(rand(0,15))->create(['guide_id' => $guide->id])
                                        ->each(function($comment){
                                            Image::factory(1)->create([
                                                'imageable_id' => $comment->id,
                                                'imageable_type' => 'App\Models\Comment',
                                                // 'url' => 'images/comments' . basename($fakerFileNameComment)
                                            ]);
                                        });

            $attach = $categories->shuffle();
            for ($i=0; $i < rand(1,3); $i++) { 
                $guide->categories()->attach([
                    $attach[$i]->id
                ]);
            }
        });
    }
}
