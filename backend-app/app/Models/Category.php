<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The categories that belong to the post.
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
